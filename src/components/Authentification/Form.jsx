import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore/lite'

const Form = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    const title = form.current[0]?.value
    const description = form.current[1]?.value
    const url = form.current[2]?.value
    const info = form.current[3]?.value
    const cover = form.current[4]?.files[0]
    const finished = form.current[5]?.checked

    const storageRef = ref(storage, `portfolio/${cover.name}`)

    uploadBytes(storageRef, cover).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              title,
              description,
              url,
              info,
              cover: downloadUrl,
              finished,
            })
          },
          () => {
            savePortfolio({
              title,
              description,
              url,
              info,
              cover: null,
              finished,
            })
          }
        )
      },
      () => {
        savePortfolio({
          title,
          description,
          url,
          info,
          cover: null,
          finished,
        })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    console.log(portfolio)
    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      window.location.reload(false)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="dashboard">
      <form
        ref={form}
        onSubmit={submitPortfolio}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          gap: '15px',

          '& input': {
            minHeigth: '150px',
          },
        }}
      >
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description" />
        <input type="text" placeholder="Url" />
        <textarea placeholder="Info" />
        <input type="file" placeholder="cover" />
        <div>
          <input type="checkbox" name="finished" />
          <label
            style={{ color: '#fff', marginLeft: '15px' }}
            htmlFor="finished"
          >
            Is finished?
          </label>
        </div>
        <button style={{ width: '50%' }} type="submit">
          Submit
        </button>
        <button onClick={() => auth.signOut()} style={{ width: '50%' }}>
          Sign out
        </button>
      </form>
    </div>
  )
}

export default Form
