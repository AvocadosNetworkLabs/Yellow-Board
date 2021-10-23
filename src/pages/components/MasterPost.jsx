import React, {useState, useEffect} from 'react';


const MasterPost = ({tipoUsr}) => {
      
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
