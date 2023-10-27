import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter , Routes , Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateStudent from './components/CreateStudent';
import studentList from './components/StudentList';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div >
      
      <HashRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<CreateStudent />} />
          {/* <Route path='/CreateStudent' element={<CreateStudent />} />
          <Route path='/studentList' element={<studentList />} /> */}
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
