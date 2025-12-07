---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6WYKTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQwga7o%2B%2BP4UQq5JWGNPatNlM%2BfTPgDc1jZTKBb7LvAiByDEiWJSUAZMg2ZFuPMfLkpxdW%2FaOXlwHNJz7LCFLFESqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMja5CTqZy%2BsXmG%2FAMKtwDhIkVTE5Z5Jo%2BOXcKAaD2m8dNFCRXT%2BSJTFftD%2BJwIwQgVcj61Vtwo48GL8k%2Fmvx1p20fWBjhxjxb7OkJAVSoQDhOfCKt4XVcWos6iJGxOQmSgOMYWaad5cgXjD%2FuUO8mIPOrcdQE5EkQnsiTDYS3onzPLtFpey5LwN%2FsJnaPAyd9JbzJqBL9e66%2B63ewbeRrrUz35vclrImXPM1o2EwJ5RPjZBrSmE1LZu7Ha%2Fjr9XZBAh2PUCW%2BJpIrUdwjTG5fapHiicKSEfgKLcEePmsQxOwfTxLqiiskYO6v6H27eaRnHszhW4a3Jso4ZNr%2F5EoTvjJBiV3iVbMqo8McKcGbAelUPqVmYjMsvF4tMbHPVbKFmM37JQ5tq8SeJaoHRGuDxMZAMPamI%2BWPSHRBBYcWsbTuieKCYkd3ot3xGJwnxMxWba%2FxQRjFm45WHzi1FGD8I%2FMztMMHJRXDMlaWlD6y7PFnWXI8d6SoxWQx8JWfEo2O2AUdqfGFnjrIMncGpQyw1WlKpQ97YiD9g994bv%2BAV24yrtFM08eczBM%2BGv3a6Kx0KL353iP3GGAJeo7tznrbXpvuvwaVcXmzMN1sO5Uq39PB8bc3NH1VC66DH%2FNXnlQ1a2BN%2Fn8O727HftEw%2BbrWyQY6pgFSZFrK1KqdCDHGzngxUYYfYAcDWIg0P%2BzcyP5CS%2FEaob3C9zJ%2BO4Zz2V5KwiUFBMfPeSrdlhB6P%2BY3eGmygsLyyOGvsf0T6JhDATikPFy7cYvep8WyiYu24Q8aKHpKuKZ2RnhKG2Q%2Fm1vg0J2wxKIihgLiCAb1tpazrjPog%2FSCJnN4oKXF4dZFHWYe0h%2FrjudSQxm5%2B2JFAysk6fBCFgqN3r%2Bwar2G&X-Amz-Signature=51eec032ea71c60caa21c858357ad0be143a9f31ca91faecab2c4787a73ab1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6WYKTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvQwga7o%2B%2BP4UQq5JWGNPatNlM%2BfTPgDc1jZTKBb7LvAiByDEiWJSUAZMg2ZFuPMfLkpxdW%2FaOXlwHNJz7LCFLFESqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMja5CTqZy%2BsXmG%2FAMKtwDhIkVTE5Z5Jo%2BOXcKAaD2m8dNFCRXT%2BSJTFftD%2BJwIwQgVcj61Vtwo48GL8k%2Fmvx1p20fWBjhxjxb7OkJAVSoQDhOfCKt4XVcWos6iJGxOQmSgOMYWaad5cgXjD%2FuUO8mIPOrcdQE5EkQnsiTDYS3onzPLtFpey5LwN%2FsJnaPAyd9JbzJqBL9e66%2B63ewbeRrrUz35vclrImXPM1o2EwJ5RPjZBrSmE1LZu7Ha%2Fjr9XZBAh2PUCW%2BJpIrUdwjTG5fapHiicKSEfgKLcEePmsQxOwfTxLqiiskYO6v6H27eaRnHszhW4a3Jso4ZNr%2F5EoTvjJBiV3iVbMqo8McKcGbAelUPqVmYjMsvF4tMbHPVbKFmM37JQ5tq8SeJaoHRGuDxMZAMPamI%2BWPSHRBBYcWsbTuieKCYkd3ot3xGJwnxMxWba%2FxQRjFm45WHzi1FGD8I%2FMztMMHJRXDMlaWlD6y7PFnWXI8d6SoxWQx8JWfEo2O2AUdqfGFnjrIMncGpQyw1WlKpQ97YiD9g994bv%2BAV24yrtFM08eczBM%2BGv3a6Kx0KL353iP3GGAJeo7tznrbXpvuvwaVcXmzMN1sO5Uq39PB8bc3NH1VC66DH%2FNXnlQ1a2BN%2Fn8O727HftEw%2BbrWyQY6pgFSZFrK1KqdCDHGzngxUYYfYAcDWIg0P%2BzcyP5CS%2FEaob3C9zJ%2BO4Zz2V5KwiUFBMfPeSrdlhB6P%2BY3eGmygsLyyOGvsf0T6JhDATikPFy7cYvep8WyiYu24Q8aKHpKuKZ2RnhKG2Q%2Fm1vg0J2wxKIihgLiCAb1tpazrjPog%2FSCJnN4oKXF4dZFHWYe0h%2FrjudSQxm5%2B2JFAysk6fBCFgqN3r%2Bwar2G&X-Amz-Signature=836397310fe97f3a1a86f3bc700efbfd796319c2e052ccf75016d7ab9fc5ab54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

