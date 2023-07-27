import Human2 from "./human2";
import { Link, useParams , useNavigate} from "react-router-dom";
import style from './frontpage.module.css'

function FrontPage(){
   
    return(
        <div className={style.half}>
            <div className={style.split}>
                <Link to="/exercise" ><h1 className={style.exerciseText}>Fitness</h1></Link>
            </div>
            <div className={style.back}>
                {<Human2/>}
            </div>
        </div>
        

    );
};
export default FrontPage;