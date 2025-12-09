---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNUYTTZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2PsfvMbebi2rFbRcHjI9BW%2BW2o6rkc3fS03gdCUCWiQIhAMH%2Fk1%2FqPzUv7k27EC7I1EuNIcY5fsmiVEBVcBKcuwefKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylA2A8OtY3BVaRsskq3AOLs4N4YEt4ouGRbcNxyGRVP03OspP5gICuVoGS0P%2FYTGgIeVfHBK%2FldmIZGneJCzkv%2BToJ0mGYkSxWnKvYnrYqMTlkPJFin4NyE2eZNb8FiHM4k56P1GluKJWBlksfQsYVnq0XeBx%2B7G2apILyx%2Fj4Mrv%2BYnM0%2FM5OW3d1W3ChoPRjPhMRFwqRmkRLJQHCDHAX6g0MYUw8Sl%2F8vRpoDrhT2QN26b7eigv6bAJFwh8%2BptEXUtmgqhokAKPWYCBNnxI733Lzz8o4%2FttNbjb0tRp4gxCDXg2%2BB1IDknSHka765PyMRUuHtnqvbXlUfAPe1qPYtBrvxEMqOJo7snQMdPINwaIutRjrU4ClNiOaEzw1ldH9nm%2FprOVNBK0HfNm3HASe%2BV4bTcVZrkzjHRlg4VeIqDNnP8wYEOM4SaZ%2Fb7pHhuVFjM187zuTM7ZxQAKtjR9weD3jOHAsiJWck8Ia8JGQ0E5OCtWL3ZZfOVSnWOwPfhEFY2iiDLZy3tI3vDrliTOEP9oj3VvmqQX9OGpCCyhUhrdz2NtxXJCDhasODHHUS%2B%2F6Kl8Pcrzl0m7stsSLmpHjrurXyT32xOxxbL%2FvouH8sRzi%2BPmg0M1rJ8nR%2BaEk1NTC5IpHH6F34iS5NzCW6d3JBjqkAU%2BAGlkTB%2F8GkUEGytEu2yTc111DfbnS%2Fv1Hq2VkaxtStnMkqI9SBu7UrE907USjF1gcs1qfVHbX7YPImulBd9s988Jq9gyAuD%2F0NTD8Zj9mWWdPiv8Zfw6BZqffQMuW5aeDbyHgMaO8VRj%2BTnFoUIzSERzMso%2FxavONLnuVk41AYNv%2BVs%2Fob8kFTUCi6np1r6MIZsNIWe5wLvPkQt0btyIBy%2F%2BC&X-Amz-Signature=cb83bc720189815a3ea88e528ff13d8c714140b2affb27392e811da4ec36e2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNUYTTZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2PsfvMbebi2rFbRcHjI9BW%2BW2o6rkc3fS03gdCUCWiQIhAMH%2Fk1%2FqPzUv7k27EC7I1EuNIcY5fsmiVEBVcBKcuwefKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylA2A8OtY3BVaRsskq3AOLs4N4YEt4ouGRbcNxyGRVP03OspP5gICuVoGS0P%2FYTGgIeVfHBK%2FldmIZGneJCzkv%2BToJ0mGYkSxWnKvYnrYqMTlkPJFin4NyE2eZNb8FiHM4k56P1GluKJWBlksfQsYVnq0XeBx%2B7G2apILyx%2Fj4Mrv%2BYnM0%2FM5OW3d1W3ChoPRjPhMRFwqRmkRLJQHCDHAX6g0MYUw8Sl%2F8vRpoDrhT2QN26b7eigv6bAJFwh8%2BptEXUtmgqhokAKPWYCBNnxI733Lzz8o4%2FttNbjb0tRp4gxCDXg2%2BB1IDknSHka765PyMRUuHtnqvbXlUfAPe1qPYtBrvxEMqOJo7snQMdPINwaIutRjrU4ClNiOaEzw1ldH9nm%2FprOVNBK0HfNm3HASe%2BV4bTcVZrkzjHRlg4VeIqDNnP8wYEOM4SaZ%2Fb7pHhuVFjM187zuTM7ZxQAKtjR9weD3jOHAsiJWck8Ia8JGQ0E5OCtWL3ZZfOVSnWOwPfhEFY2iiDLZy3tI3vDrliTOEP9oj3VvmqQX9OGpCCyhUhrdz2NtxXJCDhasODHHUS%2B%2F6Kl8Pcrzl0m7stsSLmpHjrurXyT32xOxxbL%2FvouH8sRzi%2BPmg0M1rJ8nR%2BaEk1NTC5IpHH6F34iS5NzCW6d3JBjqkAU%2BAGlkTB%2F8GkUEGytEu2yTc111DfbnS%2Fv1Hq2VkaxtStnMkqI9SBu7UrE907USjF1gcs1qfVHbX7YPImulBd9s988Jq9gyAuD%2F0NTD8Zj9mWWdPiv8Zfw6BZqffQMuW5aeDbyHgMaO8VRj%2BTnFoUIzSERzMso%2FxavONLnuVk41AYNv%2BVs%2Fob8kFTUCi6np1r6MIZsNIWe5wLvPkQt0btyIBy%2F%2BC&X-Amz-Signature=9f8323451c190c6cbfcf8d1b4e4aa7408a7e5332868f037382499b548ca1d912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

