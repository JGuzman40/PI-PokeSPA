import PokemonForm from '../../Form/PokemonForm'; 
import NavBar from '../../NavBar/NavBar';

import './CreatePage.scss';

const CreatePage = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <PokemonForm isEditing={false} />
            </div>
        </div>
    )
};

export default CreatePage;
