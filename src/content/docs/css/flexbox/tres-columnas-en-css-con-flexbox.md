---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGJUFKI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDzZ%2B6cbbu1Hvp7dej7aRp3aJx%2B8KWyRXczuFCwkXgt%2BwIhAOvuJDurDLsD9G2S%2FJ4NRjjgoZPo6bGg8biXHF%2BYfD44Kv8DCD0QABoMNjM3NDIzMTgzODA1Igxw9w01V7LJXJMYbscq3AO%2FlHdO4y%2Bi4JXN8Dq0gKaalzj4DxoC4VlNgLJeoSjA5HIBjMQsNAte154OZCw42Kx8Kx4NCOA352w5gQ7j%2BFtjiQt9b%2FcmRFZH%2BuKyN1InSknhBuheSroePySaiwePI9lJK6jHgKlgt09pz%2FmhjwoYH5oWWEMH8w27OfJ48Ws3O4ry%2FZRIxAzLgfUsuDhvDcfbITxYj0lNKdt4dkpe%2FskFtehOtFF09H%2BWW9vBa2Ixt%2Bd4QJNMZJDk%2Bh6TWhDWUqaATS1Bk0VaS0JhoNXBEMfEESwBqAdWRH%2BYk9emEMPHdV2A8CLQ0MVID4iRejnnX3bunTBTjPb0NCjOzaKsOHxYXgqK30jtVwcOrR7ASTj70QWbAcLpbxBNbrqpo6ZTCCW14Nyxa5Dopv83MBV47jrPyp9zVPhW1sgV7fh%2BmVVPzaSmuG5D1N5j%2F1XP38XhRxhjvQ6HGt2m%2BDEWlipoD82N8bhIRV7G1pFwWDd0WcVTcJasiXEiWLAW24jLLQOl0dbmyHFUp%2BZchnvsdU8q3R0wvFKhnlkKPygyQ0dtxFYNfenb8zPb7YVDHNF3KuEPlPdM6wWt9c8CKyKeDcFcciNkjiKwwmS27Fiyw31R5ejHmQYG1oEqsWK9ounXVTCZkcTJBjqkAaVNjlRmAH7EGtDJoAaLZCEdJTUvkPICgHjB5JnI%2FZ24Zh25EiuG7ifNBFZ171kfJM1lEFhiG12oKhg2bV4%2BIrixsTbGP3reR50GC%2BMTEnWZqurSMJsTL9nR4KaXCuAMbgul1OWuxz4mKTr2UMB%2FdGb9IPhci4D3nUUnBrC6vYRR%2B89Ly4fduwP11gIb4A9SAcxqf0V4uBuaT46dlamHjQ07pxSj&X-Amz-Signature=c29c917dab6e7b9944c6ea3d03a4713364880c2e6a782f2cdee53309f832378f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGJUFKI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDzZ%2B6cbbu1Hvp7dej7aRp3aJx%2B8KWyRXczuFCwkXgt%2BwIhAOvuJDurDLsD9G2S%2FJ4NRjjgoZPo6bGg8biXHF%2BYfD44Kv8DCD0QABoMNjM3NDIzMTgzODA1Igxw9w01V7LJXJMYbscq3AO%2FlHdO4y%2Bi4JXN8Dq0gKaalzj4DxoC4VlNgLJeoSjA5HIBjMQsNAte154OZCw42Kx8Kx4NCOA352w5gQ7j%2BFtjiQt9b%2FcmRFZH%2BuKyN1InSknhBuheSroePySaiwePI9lJK6jHgKlgt09pz%2FmhjwoYH5oWWEMH8w27OfJ48Ws3O4ry%2FZRIxAzLgfUsuDhvDcfbITxYj0lNKdt4dkpe%2FskFtehOtFF09H%2BWW9vBa2Ixt%2Bd4QJNMZJDk%2Bh6TWhDWUqaATS1Bk0VaS0JhoNXBEMfEESwBqAdWRH%2BYk9emEMPHdV2A8CLQ0MVID4iRejnnX3bunTBTjPb0NCjOzaKsOHxYXgqK30jtVwcOrR7ASTj70QWbAcLpbxBNbrqpo6ZTCCW14Nyxa5Dopv83MBV47jrPyp9zVPhW1sgV7fh%2BmVVPzaSmuG5D1N5j%2F1XP38XhRxhjvQ6HGt2m%2BDEWlipoD82N8bhIRV7G1pFwWDd0WcVTcJasiXEiWLAW24jLLQOl0dbmyHFUp%2BZchnvsdU8q3R0wvFKhnlkKPygyQ0dtxFYNfenb8zPb7YVDHNF3KuEPlPdM6wWt9c8CKyKeDcFcciNkjiKwwmS27Fiyw31R5ejHmQYG1oEqsWK9ounXVTCZkcTJBjqkAaVNjlRmAH7EGtDJoAaLZCEdJTUvkPICgHjB5JnI%2FZ24Zh25EiuG7ifNBFZ171kfJM1lEFhiG12oKhg2bV4%2BIrixsTbGP3reR50GC%2BMTEnWZqurSMJsTL9nR4KaXCuAMbgul1OWuxz4mKTr2UMB%2FdGb9IPhci4D3nUUnBrC6vYRR%2B89Ly4fduwP11gIb4A9SAcxqf0V4uBuaT46dlamHjQ07pxSj&X-Amz-Signature=84aaa7b15b6019a5054b0946235abef98241e0f8773e86e780dee5733c912907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

