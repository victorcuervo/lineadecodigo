---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXI6BVD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxtlXi%2B%2BVvVMyACvnr08x9LWGdfJJp%2BbzUbNpNENaCqAiEAjoWuu1nAV8ncvrMZeyD6YG5J8Oym98v0NeFnVzphadMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBQLiZL11edG1nh1dircA6pHnToRs9vDP%2FJn%2FBUq98I%2BDA%2BR6v4ksWSyo8x924uTbYCgAuCuNvVDsH%2BQbnrZVGydTZ4ZC5dl5bw5BrIZslvnBuqLitIt60ou7YdISceD8Ua7n7fDFxlfLF9L7WQt%2BaxA018SYql7vfp3qBPGNVGMjcOaPf66D%2FVZaJtFc9qnpT6CUx706tr57dBeGR5aw5v8w7Dr9duTTeiaF0SyM0Z2Ev%2B%2FgL2rU0rVGkilLL7EFbrAePPzYx216yOSkkF4giuArCH1%2FTe5%2BxDVOQO4ORV%2BKD4QYoGLHsfHFWWKSR2VBj%2BsE1PIMb529cK5iqWOcwDlOZsd5kkAvik3o4%2BXrWoFLOcBNNxklJDXPeWrShPAKnvmiGbTptK%2BcEdpnwmmfaM0sCnlDC8hATZUxcKVrm8craBNcmkccSV5T6JRLL5RZr2rpMtsDKa0qxVfswJ7E89RanPgUPMYcR0l5Dv8hgYg2uU2qpwvZYuNuCZCSdL7Qad4B9PaL4N3dBxpDoFFbSV1uPsUY9ZqRGfBGaeWHbz6bAG%2BHUMgBzWVcJd3LFeCdnEgo%2FA2bEDkqucKEb6D2GCh930eT1hMTK3Ezm%2BV2VxzYHv4yJsamp6tZgdvjKz6UYw%2BW5cfuhgMUV8XMO6MyMkGOqUBxVCOCEyAk6da9JC%2B1GaAlGidLzKO5LDQsiek6xvxDq7QZK1nId2SRbU5e1kZZHqboyD7FNY2YWRULkjC9V7hckfp4bOdZ%2Fi9x2gyIMXLjo9BrwWrNr0hk13fJuCm%2Byc6AjuuCFC%2F53vvQisLq9AU2hPxeP3Vz7%2FqKDm4cn%2FOvlUl1udi%2BuVelGRIFRjVqTxUJ4KN9kpGQhz11xGShrEF0%2F1NP6Yf&X-Amz-Signature=382af1cd570e6e9f58cc853d8c36ce3763928de4abd2a3a20b25767d7a42de13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXI6BVD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxtlXi%2B%2BVvVMyACvnr08x9LWGdfJJp%2BbzUbNpNENaCqAiEAjoWuu1nAV8ncvrMZeyD6YG5J8Oym98v0NeFnVzphadMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBQLiZL11edG1nh1dircA6pHnToRs9vDP%2FJn%2FBUq98I%2BDA%2BR6v4ksWSyo8x924uTbYCgAuCuNvVDsH%2BQbnrZVGydTZ4ZC5dl5bw5BrIZslvnBuqLitIt60ou7YdISceD8Ua7n7fDFxlfLF9L7WQt%2BaxA018SYql7vfp3qBPGNVGMjcOaPf66D%2FVZaJtFc9qnpT6CUx706tr57dBeGR5aw5v8w7Dr9duTTeiaF0SyM0Z2Ev%2B%2FgL2rU0rVGkilLL7EFbrAePPzYx216yOSkkF4giuArCH1%2FTe5%2BxDVOQO4ORV%2BKD4QYoGLHsfHFWWKSR2VBj%2BsE1PIMb529cK5iqWOcwDlOZsd5kkAvik3o4%2BXrWoFLOcBNNxklJDXPeWrShPAKnvmiGbTptK%2BcEdpnwmmfaM0sCnlDC8hATZUxcKVrm8craBNcmkccSV5T6JRLL5RZr2rpMtsDKa0qxVfswJ7E89RanPgUPMYcR0l5Dv8hgYg2uU2qpwvZYuNuCZCSdL7Qad4B9PaL4N3dBxpDoFFbSV1uPsUY9ZqRGfBGaeWHbz6bAG%2BHUMgBzWVcJd3LFeCdnEgo%2FA2bEDkqucKEb6D2GCh930eT1hMTK3Ezm%2BV2VxzYHv4yJsamp6tZgdvjKz6UYw%2BW5cfuhgMUV8XMO6MyMkGOqUBxVCOCEyAk6da9JC%2B1GaAlGidLzKO5LDQsiek6xvxDq7QZK1nId2SRbU5e1kZZHqboyD7FNY2YWRULkjC9V7hckfp4bOdZ%2Fi9x2gyIMXLjo9BrwWrNr0hk13fJuCm%2Byc6AjuuCFC%2F53vvQisLq9AU2hPxeP3Vz7%2FqKDm4cn%2FOvlUl1udi%2BuVelGRIFRjVqTxUJ4KN9kpGQhz11xGShrEF0%2F1NP6Yf&X-Amz-Signature=3c37bca4764b34b939857c0512c89016511c8b4f06eb03ee0df8868db97befea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

