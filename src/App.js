import React,{useState} from "react"
import './App.css';
import DataTableDemo from './views/DataTableDemo';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CheckPicker from 'rsuite/CheckPicker';
import DatePicker from 'rsuite/DatePicker';
import { SelectButton } from 'primereact/selectbutton';
const data = [
  'Ivoirienne',
  'Ivoirien',
  
].map(item => ({ label: item, value: item }));

const data1 = [
  'specialite 1',
  'specialite 2',
  
].map(item => ({ label: item, value: item }));


function App() {
  const [age, setAge] = React.useState('');
  
  const [value1, setValue1] = useState('Off');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const justifyOptions = [
    {icon: 'pi pi-align-left', value: 'left',name:"Masculin",text:"Selectionner le sexe"},
    {icon: 'pi pi-align-right', value: 'Right',name:"Feminin",text:"Selectionner le sexe"},
];

const justifyTemplate = (option) => {
    return ( <div className="d-flex">
     <i className={option.icon}></i>
     <div className="">
      <h2> {option.name} </h2>
      <p> {option.text} </p>
     </div>
  
  </div>);
}

  return (
    <div className="">
      
    <section className="form-section py-5" >
      <div className="container justify-content-center">
        <div className="col-12 form-select pb-5">
          <div className="form-header text-center text-white mb-2">
            <h2 className="py-5" style={{backgroundColor:"blue"}} >
            Formulaire d’enregistrement du personnel médical
            </h2>
          </div>
          <h3 className="pt-2 ms-4" >
            Personnel médical
          </h3>


          <form className="pt-2" >

            <div className="d-flex ">
              <TextField className="mx-3  my-3" required fullWidth id="outlined-basic" label="Nom" variant="outlined" />
              <TextField  className="mx-3 my-3" required fullWidth id="outlined-basic" label="Prénom" variant="outlined" />
            </div>
            
            <div className="row">
              <div className="col-6 my-3">
              <TextField type="date" className="mx-3 my-3" required fullWidth id="outlined-basic" variant="outlined" />

                {/* <DatePicker  className="ms-4" size="lg" placeholder="Date de naissance" block /> */}
              </div>
              <div className="col-6 my-3">
               <CheckPicker className="ms-4" size="lg" placeholder="Lettre d'identification" block data={data}  />
                
              </div>
            </div>
            
            <div className="row">
              <div className="col-6 my-3">
               <CheckPicker className="ms-4" size="lg" placeholder="Selectionner une nationnalité" block data={data}  />
              </div>
              <div className="col-6 my-3">
                
                <DatePicker  className="ms-4" size="lg" placeholder="Date de naissance" block />
              </div>
            </div>
            
          
          
            <div className="row">
            <div className="col-6  my-3">
            <TextField
            className="mx-3"
            fullWidth
                id="outlined-multiline-static"
                label="Residence Habituelle"
                multiline
                rows={4}
                required
              />
              </div>
              <div className="col-6 ">
               <CheckPicker className="ms-4" size="lg" placeholder="Selectionner une specialité" block data={data1}  />
              <TextField  className=" my-2 mx-3" required fullWidth id="outlined-basic" label="email" variant="outlined" />
            
              </div>
            </div>
            <div className="">
            <div className="col-6  my-3">
            <TextField
            className="mx-3"
            fullWidth
                id="outlined-multiline-static"
                label="Residence secondaire"
                multiline
                rows={1}
              />
              </div>
              <div className="col-6  my-3">
              <TextField className="mx-3" required fullWidth id="outlined-basic" label="Telephone" variant="outlined" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 my-3">
              <TextField className="mx-3" required fullWidth id="outlined-basic" label="Telephone Portable" variant="outlined" />
              </div>
            </div>



          </form>
        </div>
      </div>
    </section>


     <DataTableDemo />
    </div>
  );
}

export default App;
