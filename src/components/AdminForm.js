import React from 'react';

const AdminForm = ({id: key, majRecette,supprimerRecette, recettes}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

        return (
            <div className={'card'}>
                <form className={'admin-form'}>
                    <input type={'text'} value={recette.nom} name={'nom'} onChange={e => handleChange(e, key)} placeholder={'Npm de la recette'} />

                    <input type={'text'} value={recette.image} name={'image'} onChange={e => handleChange(e, key)} placeholder={'Adresse de l\'image'} />

                    <textarea name={'ingredients'} value={recette.ingredients} name={'ingredients'} onChange={e => handleChange(e, key)} rows={'3'} placeholder={'Liste des ingredients'}/>

                    <textarea name={'ingredients'} value={recette.instructions} name={'instructions'} onChange={e => handleChange(e, key)} rows={'3'} placeholder={'Liste des instructions'}/>

                </form>
                <button onClick={() => supprimerRecette(key)}>Supprimer</button>
            </div>
        );
}

export default AdminForm;