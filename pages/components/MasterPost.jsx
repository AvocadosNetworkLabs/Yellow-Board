import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchposts } from '../../redux/actions/postAction';


const MasterPost = ({tipoUsr}) => {
    // const { query: { id_maestro }, } = useRouter();
    const dispatch = useDispatch();
    // const {data} = useSelector(state=> state.postReducer)

    const data = []

    useEffect(() => {   
        dispatch(fetchposts());
      }, [])
      
    return (
        <>
            {data && data.map((post,key) => ( 
                <>
                    <div key={key}>
                        <h2>
                        {post.titulo}
                        </h2>
                        <h3>{post.nombre}</h3>
                        <h3>{post.nombre_usuario} {post.apellidos}</h3>
                        {post.id_maestro}
                        {post.contenido}
                        {post.archivo}
                        {post.fecha}
                        {post.sta}
                         
                    </div>
                </>
            ))}
        </>
    )
}

export default MasterPost;
