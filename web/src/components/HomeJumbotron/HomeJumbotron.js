import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './HomeJumbotron.module.css'

const HomeJumbotron = () => {

  return (
    <Jumbotron className={styles.jumbotron}>
      <div className={[styles.textOverlay, "rounded-lg", "bg-white", "shadow", "p-5"].join(' ')}>
        <strong className={["text-uppercase", "text-secondary", "d-inline-block", "mb-2", "text-sm"].join(' ')}>Featured</strong>
        <h2 className="mb-3">Escape the city today</h2>
        <p className="text-muted">
          Is am hastily invited settled at limited civilly fortune me.
          Really spring in extent an by. Judge but built party world...
        </p>
      </div>
    </Jumbotron>
  )
}

export default HomeJumbotron
