import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTemperaments, postDog } from "../../redux/actions";
import validation from "./validate";
import styles from "./Form.module.css";
import { BsXCircleFill } from "react-icons/bs";

const Form = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);
  const [form, setForm] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    image: "",
    temperaments: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  //Validaciones
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  //Seleccionar temperamentos y agregarlo al estado local
  const handleTemperaments = (event) => {
    const value = event.target.value;
    if (!form.temperaments.includes(value)) {
      setForm({ ...form, temperaments: [...form.temperaments, value] });
    }
  };

  //Eliminar temperamento
  const handleDeleteTemperament = (element) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temp) => temp !== element),
    });

  };
  // Botón Create
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(form));
    alert("The new dog was added successfully");
    setForm({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        image: "",
        temperaments: [],
    })
  };

  return (
    <section className="container">
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titleForm}>CREATE DOG</h1>
        <div className={styles.contentForm}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Name dog"
            className={styles.inputForm}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={`${styles.contentFlex} ${styles.contentForm}`}>
          <input
            type="number"
            name="minHeight"
            onChange={handleChange}
            value={form.minHeight}
            placeholder="Min height"
            className={styles.inputForm}
          />
          <input
            type="number"
            name="maxHeight"
            onChange={handleChange}
            value={form.maxHeight}
            placeholder="Max Height"
            className={styles.inputForm}
          />
          {errors.height && <span className={styles.error}>{errors.height}</span>}
        </div>
        <div className={`${styles.contentFlex} ${styles.contentForm}`}>
          <input
            type="number"
            name="minWeight"
            onChange={handleChange}
            value={form.minWeight}
            placeholder="Min Weight"
            className={styles.inputForm}
          />
          <input
            type="number"
            name="maxWeight"
            onChange={handleChange}
            value={form.maxWeight}
            placeholder="Max Weight"
            className={styles.inputForm}
          />
          {errors.weight && <span className={styles.error}>{errors.weight}</span>}
        </div>
        <div className={styles.contentForm}>
          <input
            type="text"
            name="life_span"
            onChange={handleChange}
            value={form.life_span}
            placeholder="Life span"
            className={styles.inputForm}
          />
          {errors.life_span && (
            <span className={styles.error}>{errors.life_span}</span>
          )}
        </div>
        <div className={styles.contentForm}>
          <select
            name="temperaments"
            defaultValue="temperaments"
            onChange={handleTemperaments}
            className={styles.selectForm}
          >
            <option value="temperaments" disabled>
              Temperaments
            </option>
            {allTemperaments.map((temp) => (
              <option value={temp.name} key={temp.id}>
                {temp.name}
              </option>
            ))}
          </select>
          {errors.temperaments && (
            <span className={styles.error}>{errors.temperaments}</span>
          )}
        </div>
        <div className={styles.containerTemp}>
          <span className={styles.titleTemperaments}>List Temperaments:</span>
          <div className={styles.listTemperament}>
            {
                form.temperaments.map(temp => 
                    <div className={styles.temperament} key={temp} >
                        <span key={temp}>{temp}</span>
                        <span onClick={() => handleDeleteTemperament(temp)} className={styles.close}><BsXCircleFill/></span>
                    </div> 
                )
            }
          </div>
        </div>
        <div className={styles.contentForm}>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={form.image}
            placeholder="Image"
            className={styles.inputForm}
          />
          {errors.image && <span className={styles.error}>{errors.image}</span>}
        </div>
        <button className={styles.btn} disabled={
              !form.name ||
              !form.image ||
              !form.life_span ||
              !form.maxHeight ||
              !form.minHeight ||
              !form.maxWeight ||
              !form.minWeight ||
              form.temperaments.length === 0
            }>CREATE</button>
      </form>
    </section>
  );
};

export default Form;
