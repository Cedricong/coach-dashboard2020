import {
    Link
} from "react-router-dom";
export default function Header() {
    return (
        <div>
            <p>This is Header</p>
            <nav class="navbar navbar-expand-lg navbar-dark" style={styles.bgMain}>
        <div class="container">
        <Link to ="/" class="navbar-brand"> My Coach 2U</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              <Link to ="/" class="navbar-link"> Dashboard <span class="sr-only">(current)</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link to ="/" class="navbar-link">My Coach</Link>
            </li>
            <li class="nav-item">
                <Link to ="/" class="navbar-link">My Client</Link>
            </li>
            <li class="nav-item">
                <Link to ="/" class="navbar-link">My Gym</Link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add Content
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#addCoachModal">Add Coach</a>
              <a class="dropdown-item" href="#">Add Gym</a>
              <a class="dropdown-item" href="#">Add Client</a>
          </div>
      </li>
  </ul>
</div>
</div>
</nav>
<header class="py-5 text-light bg-dark">
    <div class="container">
        <h1><i class="fas fa-cogs"></i> MyCoach2U</h1>
    </div>
</header>
        </div>
    )
}
const styles = {
    bgMain : {
        backgroundColor: 'rgb(220,60,50)'
    }
}
