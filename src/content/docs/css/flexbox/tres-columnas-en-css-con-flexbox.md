---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJOJYOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdqeWHQtshpanpaEviL62JybiztlHltfNfnowiTxsJaAIhAMzQEn7Ae3UMXDYVSUOvSXZoKBXr8oDykmGL3cEgj%2Bi8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxSjKwq%2FWrCpstSM18q3ANIRFah3cuX8%2Btb2x1cbd%2Bj7xM8qJWfSRiN986LjOvhD3IVtOdcMAL%2BgapJckdDb%2B0S%2B28l9yCcgLsrFzW38ZE%2BIycrojRgwmayyUHKIjRBP7eK5dEf%2FbRJsHIflHxcCQM4ZKiAK8LyXxra6RUz8GmGlxMfesGo8Vt0w%2BJlbRsz8hm0Sqw5RiK5ecb2%2BdZqZOsjDnHx0CigUghxRQt2KUen3RiyVrTxw0gcH0TlgqYipcMmjUwddiTvi50EXcwlocOyHqu%2FLUpwTvEhXgO26vJ%2FBLsdAZI3MMbHw%2BkF6C5%2BbUB7A7Z7gpP3FmXPOFK7%2F51DFfF3%2FW8l1Byen1Z9Dwry8OthzlnMBH20kjVEmrPfBcmd1J0Bpcqj%2BOWukymHMSllcCfmK0JS1g3DkSg2TmQv01Yw9cfkK3WBcJHuyED9Phw8OQkFUt5SZDUfPTNsBL%2FQSzIbe0bgu2R91TMN0dm%2Fa%2FMVNAVwObMt2OyZpwcFA2eg1X5wJECb3ygjlhOgY51R5gYKmUyPhHczO7sp221zRvnKNW1fgemTIUlorin%2FG5epEbvWXxQ3Fl0iYAgXHfw2hAMbFvQoa93m1TL%2FVFEd2fdGOs5LRrdMYq7gnJQCF5WEAsd%2B84Lh0yasNjD29MvJBjqkAWSmdJJPzBkw746WDmvQMM14LsvgRDK%2BTGuY47Ow9IyXT0T%2F9UO2UR18mrlj1TklccpZYyuYgcfhFSJ4Wr%2BA4CcwhQ19kd3OqS7y4j7hD%2ByPX68Ld%2FcWJejcahhcK%2BY6kPWokkZAboET6F2zD1azjPmlSjSj2EpDHzjh2dkL7BXNo%2BjfW4GPnpt5CiaOcIDaE8cX9dF6oReoUpSBfnFyXcm%2BDFeC&X-Amz-Signature=9326cb105c818d4a4d1f3c75376871d070aba32fecbf0adbf1ad5e4247b46142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJOJYOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdqeWHQtshpanpaEviL62JybiztlHltfNfnowiTxsJaAIhAMzQEn7Ae3UMXDYVSUOvSXZoKBXr8oDykmGL3cEgj%2Bi8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxSjKwq%2FWrCpstSM18q3ANIRFah3cuX8%2Btb2x1cbd%2Bj7xM8qJWfSRiN986LjOvhD3IVtOdcMAL%2BgapJckdDb%2B0S%2B28l9yCcgLsrFzW38ZE%2BIycrojRgwmayyUHKIjRBP7eK5dEf%2FbRJsHIflHxcCQM4ZKiAK8LyXxra6RUz8GmGlxMfesGo8Vt0w%2BJlbRsz8hm0Sqw5RiK5ecb2%2BdZqZOsjDnHx0CigUghxRQt2KUen3RiyVrTxw0gcH0TlgqYipcMmjUwddiTvi50EXcwlocOyHqu%2FLUpwTvEhXgO26vJ%2FBLsdAZI3MMbHw%2BkF6C5%2BbUB7A7Z7gpP3FmXPOFK7%2F51DFfF3%2FW8l1Byen1Z9Dwry8OthzlnMBH20kjVEmrPfBcmd1J0Bpcqj%2BOWukymHMSllcCfmK0JS1g3DkSg2TmQv01Yw9cfkK3WBcJHuyED9Phw8OQkFUt5SZDUfPTNsBL%2FQSzIbe0bgu2R91TMN0dm%2Fa%2FMVNAVwObMt2OyZpwcFA2eg1X5wJECb3ygjlhOgY51R5gYKmUyPhHczO7sp221zRvnKNW1fgemTIUlorin%2FG5epEbvWXxQ3Fl0iYAgXHfw2hAMbFvQoa93m1TL%2FVFEd2fdGOs5LRrdMYq7gnJQCF5WEAsd%2B84Lh0yasNjD29MvJBjqkAWSmdJJPzBkw746WDmvQMM14LsvgRDK%2BTGuY47Ow9IyXT0T%2F9UO2UR18mrlj1TklccpZYyuYgcfhFSJ4Wr%2BA4CcwhQ19kd3OqS7y4j7hD%2ByPX68Ld%2FcWJejcahhcK%2BY6kPWokkZAboET6F2zD1azjPmlSjSj2EpDHzjh2dkL7BXNo%2BjfW4GPnpt5CiaOcIDaE8cX9dF6oReoUpSBfnFyXcm%2BDFeC&X-Amz-Signature=9be934868c0c14ee5b9892d0936307cc68a4078436944db2fba78dc20f6aec4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

