---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73GPIGH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCijHzbY6z%2FvZrJIAMH9pzhtqSxzuxfSIpiNuvugKj2fgIhAMR08V%2BBvfeZV%2Ft7YtHE47bryPQZ1Oe25E8wEAQi6hubKv8DCFsQABoMNjM3NDIzMTgzODA1IgxTqgWMqAlXL3AJb0wq3ANdIid3WSZUQ0BoGbga36ZzMAhdsEy1W%2FF4gGuTb6a%2Bkl41sgG3nfXVr7QpppEFa0M8mJ4%2B95P0U6zeEckkatw768RbE1ZDXtUwLes0Ve%2Bdnj9sG2xx8RoNUfzoOxFOKLH5lRsRBLp%2BgdBOcIbvB2IM6VRfo4A3kmttiyYWajCqdxFbcmMbw9Eq5r5t13HuRsXIFSq7T11VAjJUDUmP5sgH4epAF14iZWa7SLIttQ296DscbMuEseHFdELd0f4mqPyqd9R61SzEHylfSkeRKZ%2BNKVkT8TFjTVIspbZTcZi1ejIUOCpm5y9O5OCPwBPcPBW4uy5SCPcad0aPkSGtMFMdxskWfj9%2BWTy80wFS5fbI13vWLVUO9XdUbUgtVpM3c6TgFro6xkQTvMwd0CyVGV%2FrNP7UyBJxYHQV5X6PgNnEEnk%2BKw9uKcrEvMCNQZhtHNf16%2Fa1gmdbiIadhXl3Gak0f9Y3of%2Bxv0t9rVB1TKUxHeOAckJo78t7bElg4apmHrpXZ%2FLKjw7RcpoUYXX3xuM1%2BEEpIyRVRS4AyItLzS9hlugyLscJo%2ByoInONt7BytETQp650XLofzGTZ8XGqB4iRLB2hyNk3meor9qF9zzyna9u6fTUn50nPeJ4zNTDU1srJBjqkATLu9k8BdIMVDs2aqHa46b0WN%2BVkd0Va%2Ftf2rtCAc9%2FQTq2Ja0GBe0ccTjUBYUsf9zJIC9OP0dNZV4VRsRH%2B2bW%2F30NaiaDD0YRTLBLYYxOzSA89TaZawd3QIpockt3EArr1dXDi9yYa81qp3OVhNKFdyWsBqR2%2BA8YLzawd1PDaFBAkdApbMXfSxvsneSVEJYSVS%2FiGp8ZTnbAp15QWgoPY22VG&X-Amz-Signature=deb63ed0127d5a30baabea405c1a5605422d63e3d8fcdf7ac53bc1eddcf67623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73GPIGH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCijHzbY6z%2FvZrJIAMH9pzhtqSxzuxfSIpiNuvugKj2fgIhAMR08V%2BBvfeZV%2Ft7YtHE47bryPQZ1Oe25E8wEAQi6hubKv8DCFsQABoMNjM3NDIzMTgzODA1IgxTqgWMqAlXL3AJb0wq3ANdIid3WSZUQ0BoGbga36ZzMAhdsEy1W%2FF4gGuTb6a%2Bkl41sgG3nfXVr7QpppEFa0M8mJ4%2B95P0U6zeEckkatw768RbE1ZDXtUwLes0Ve%2Bdnj9sG2xx8RoNUfzoOxFOKLH5lRsRBLp%2BgdBOcIbvB2IM6VRfo4A3kmttiyYWajCqdxFbcmMbw9Eq5r5t13HuRsXIFSq7T11VAjJUDUmP5sgH4epAF14iZWa7SLIttQ296DscbMuEseHFdELd0f4mqPyqd9R61SzEHylfSkeRKZ%2BNKVkT8TFjTVIspbZTcZi1ejIUOCpm5y9O5OCPwBPcPBW4uy5SCPcad0aPkSGtMFMdxskWfj9%2BWTy80wFS5fbI13vWLVUO9XdUbUgtVpM3c6TgFro6xkQTvMwd0CyVGV%2FrNP7UyBJxYHQV5X6PgNnEEnk%2BKw9uKcrEvMCNQZhtHNf16%2Fa1gmdbiIadhXl3Gak0f9Y3of%2Bxv0t9rVB1TKUxHeOAckJo78t7bElg4apmHrpXZ%2FLKjw7RcpoUYXX3xuM1%2BEEpIyRVRS4AyItLzS9hlugyLscJo%2ByoInONt7BytETQp650XLofzGTZ8XGqB4iRLB2hyNk3meor9qF9zzyna9u6fTUn50nPeJ4zNTDU1srJBjqkATLu9k8BdIMVDs2aqHa46b0WN%2BVkd0Va%2Ftf2rtCAc9%2FQTq2Ja0GBe0ccTjUBYUsf9zJIC9OP0dNZV4VRsRH%2B2bW%2F30NaiaDD0YRTLBLYYxOzSA89TaZawd3QIpockt3EArr1dXDi9yYa81qp3OVhNKFdyWsBqR2%2BA8YLzawd1PDaFBAkdApbMXfSxvsneSVEJYSVS%2FiGp8ZTnbAp15QWgoPY22VG&X-Amz-Signature=58533e540657ee68c054b71be4634f61baab254a28fbc91473c6347f77af7478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

