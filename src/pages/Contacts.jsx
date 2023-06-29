import React,{ useEffect } from "react";
import { ContactList } from "../components/PhoneBookComponents/ContactList/ContactList";
import { Filter } from "../components/PhoneBookComponents/Filter/Filter";
import { Section } from "../components/Section/Section";
import { FormHooks } from "../components/PhoneBookComponents/Form/FormHoocks";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/Operations";
import { SelectIsLoading } from "redux/Selectors";
import { Bars } from "react-loader-spinner";


 const Contacts = () => {
 const isLoading = useSelector(SelectIsLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
      <Section title="Phonebook">
        <FormHooks />
      </Section>

      <Section title="Contacts">
        <Filter />
      </Section>
     {isLoading && (
        <div style={{justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'fixed',
            top: 100,
            right: 130,}}>
         <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
          <span>Loading...</span>
        </div>
      )}
      <ContactList />
    </>
  );
}

export default Contacts