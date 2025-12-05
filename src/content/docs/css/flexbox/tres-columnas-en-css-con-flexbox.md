---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYZPO22%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKducb6TXXtaGyNESxLZ59rGwDI%2B7hIJePeXGiVS9atgIhAN5aBwHdWD1KeSygt6VCp2dBR8GWLt2iP7F23ZqAzL67Kv8DCFsQABoMNjM3NDIzMTgzODA1Igxu%2BfEEMgv7nX3Ica4q3APpTLLaz3xncyDqxFp%2FycynKEGiJdDAtkXBwosc6WVSaJq4eWHO9GldVC7if4TbLp774IiC8LtGt4jw%2Bbbq9CTehdMC8s378rtIwQnsuMGJW2jhT5aTiEqIsENqcbmZcmW%2FDhhgJx%2BduhSIzTmJwxkZVsfWp2qxp%2Bb%2FmI%2Fw6VH56dHCjbwwz%2BlH9grAqhq2QhpN8fDG84NuygXgN8NXnEmFkNte%2BwFCaIl8%2B5QhKibUtosSqaGq2TAaXwXo3QinzdSRNoImFQ5LacJSlBiUuEBIT%2By1h6A0Ygu5GB8P7XRZnGVwjD91osbMcsPuMJRzt8BN4b6hroDSdxsYTmEGyruux7Yp4DaCe9%2F311AmUi%2Bq8QS24nGvkoUyIdUzU4jdP8%2Be0T8dzzMIWrTNv%2FCOh43TgMKR9XSp7209uExYJ0uDpJj1uzdCzktnM%2B6PRYpZTMG%2F94myZeq3%2Fchx83F5o53OE%2Fmrro4Dbk7XcHfKl%2BhtrFTwBdXXyfjdMNw1XJ%2FeXPHTrqXSjTvbRvR87jaA8G7DEEFI2u9cRSAmFlmSoFb6gGtPSeJ9ozTkZinrLhKqysFA0IQ%2F37kNFY08B96A4FusUOjlPfdk57ceS15sQ%2FUdQr4Tnf4ZR%2BKxLehX%2BDCJysrJBjqkARhkx1ECg%2BAzJ1YJO5Zg1TW5Poc5T8IM6Fk4FiN18v4VYhmfyqN9on7WdjX5utzQHEnqh2a3Wl%2F4DJSIzfMt51OTmxSstl0FsJbPS5E3zYl4cc1Tdwzym28AI49FdqexYzRmEE3%2FPlkhFDPRcShFw9fIEK8RjKGnFauWu52cNvaFfVJkDSyyR9Cuz80J7MhRynoUCvTyBWvUps1Ld%2BdrOs2E2c0r&X-Amz-Signature=00fdeb68f986e517533d8032ba777a182c5a4acace635e361b93f853a2a23106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYZPO22%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKducb6TXXtaGyNESxLZ59rGwDI%2B7hIJePeXGiVS9atgIhAN5aBwHdWD1KeSygt6VCp2dBR8GWLt2iP7F23ZqAzL67Kv8DCFsQABoMNjM3NDIzMTgzODA1Igxu%2BfEEMgv7nX3Ica4q3APpTLLaz3xncyDqxFp%2FycynKEGiJdDAtkXBwosc6WVSaJq4eWHO9GldVC7if4TbLp774IiC8LtGt4jw%2Bbbq9CTehdMC8s378rtIwQnsuMGJW2jhT5aTiEqIsENqcbmZcmW%2FDhhgJx%2BduhSIzTmJwxkZVsfWp2qxp%2Bb%2FmI%2Fw6VH56dHCjbwwz%2BlH9grAqhq2QhpN8fDG84NuygXgN8NXnEmFkNte%2BwFCaIl8%2B5QhKibUtosSqaGq2TAaXwXo3QinzdSRNoImFQ5LacJSlBiUuEBIT%2By1h6A0Ygu5GB8P7XRZnGVwjD91osbMcsPuMJRzt8BN4b6hroDSdxsYTmEGyruux7Yp4DaCe9%2F311AmUi%2Bq8QS24nGvkoUyIdUzU4jdP8%2Be0T8dzzMIWrTNv%2FCOh43TgMKR9XSp7209uExYJ0uDpJj1uzdCzktnM%2B6PRYpZTMG%2F94myZeq3%2Fchx83F5o53OE%2Fmrro4Dbk7XcHfKl%2BhtrFTwBdXXyfjdMNw1XJ%2FeXPHTrqXSjTvbRvR87jaA8G7DEEFI2u9cRSAmFlmSoFb6gGtPSeJ9ozTkZinrLhKqysFA0IQ%2F37kNFY08B96A4FusUOjlPfdk57ceS15sQ%2FUdQr4Tnf4ZR%2BKxLehX%2BDCJysrJBjqkARhkx1ECg%2BAzJ1YJO5Zg1TW5Poc5T8IM6Fk4FiN18v4VYhmfyqN9on7WdjX5utzQHEnqh2a3Wl%2F4DJSIzfMt51OTmxSstl0FsJbPS5E3zYl4cc1Tdwzym28AI49FdqexYzRmEE3%2FPlkhFDPRcShFw9fIEK8RjKGnFauWu52cNvaFfVJkDSyyR9Cuz80J7MhRynoUCvTyBWvUps1Ld%2BdrOs2E2c0r&X-Amz-Signature=e36d1bef8e69b2c18674b20cdf26230551370d767cccc53a8726f83e1eec2ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

