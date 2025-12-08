---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIWCZBR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMMBKBTm7%2BonmJS%2FRH93Na%2FX4%2FvOyBCAykl2OWBunQuAiAEU%2B19g1KMWfnqYpjpf6xIF%2FVEC%2F%2FFFAKBkFPqh2kFNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9e4sHUjKWpjJ2dLKtwDf1AgUpo2GoW1mjdewWZLaoV%2BfKa50pv7PG5sTp6AxfYMQCiN6I8mNMTJ9lUH%2F%2B3ivTBVSzFIPyRIOJslIij3IJipYJ62RhZvHOQUg3K9RrzOWzrjjVUoXjbfaJlZWu73Acch4zCOJ6yrvkpYkSJaFx6pMt8Z0Gq9N0NDyRm%2BSyRt7u%2B3BSx%2BHGEus%2FJcjJGC9a9Yx%2FeoFpw62bAgvNOdArK1rLRQGSGd21ubwyiLn5oKcLjyEnul9a6lvD0FioGDLAI29ZtkZWFpDTsgx2ntnqUKOb6KwAjylzN4bwF5FJi%2F9%2B88VC6%2BXY%2BPKza8rzdpMoR9guVjK7gKkykTN52ZMrCbZbHOC0IWHBBAK1vE2OSUd1A%2FS2af6SOFIlugoDEFcIaQ04otZ1DbDg6rrXmwuw%2FC7DrutEb%2F8KPXpcl6kaW89OCGDL8VvStVxUR2FFQUSQbNNa39MxgFssQBTy3JBgs2hPctoV%2FRaVaGYWEPLg2WiD9lI4v1k3O9viPFqacPdWn0rKHQydm6ZUj8WAIH2fwJ4HWjKox4%2BblkxAARiPk4EuerG5l5LalBdqxBnKbANGNDjhVxqCknGT7bRWVbUUcA0D5n9e90ckdHSow18SJGjaKwFt2awCGS9dEwsLTcyQY6pgEEmWjG75w51G6rNO3zpxJDobJyDwBfzlMOTtZ4QkrRvMfYCBqzXhZ7qU2Z%2FWne9dt%2BlkIZQhQdC%2BjBXdhQtdeuxET%2By3Yli3m9en5b5GATOIusC6Fbfl08xwA71lOr0pq0Ehip42V%2FA5Od3qlt%2BqAdcmHX4047rz8DcEEJDRRcYm6Slx9aDO7bKEZEhmRtmB8YoV6j0GoFx0Vgp2KKhh2HBRtFimPL&X-Amz-Signature=c8ffbe61a1e1315553faa6e0076900f748323b31c4843619fe038c0331c48b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIWCZBR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMMBKBTm7%2BonmJS%2FRH93Na%2FX4%2FvOyBCAykl2OWBunQuAiAEU%2B19g1KMWfnqYpjpf6xIF%2FVEC%2F%2FFFAKBkFPqh2kFNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9e4sHUjKWpjJ2dLKtwDf1AgUpo2GoW1mjdewWZLaoV%2BfKa50pv7PG5sTp6AxfYMQCiN6I8mNMTJ9lUH%2F%2B3ivTBVSzFIPyRIOJslIij3IJipYJ62RhZvHOQUg3K9RrzOWzrjjVUoXjbfaJlZWu73Acch4zCOJ6yrvkpYkSJaFx6pMt8Z0Gq9N0NDyRm%2BSyRt7u%2B3BSx%2BHGEus%2FJcjJGC9a9Yx%2FeoFpw62bAgvNOdArK1rLRQGSGd21ubwyiLn5oKcLjyEnul9a6lvD0FioGDLAI29ZtkZWFpDTsgx2ntnqUKOb6KwAjylzN4bwF5FJi%2F9%2B88VC6%2BXY%2BPKza8rzdpMoR9guVjK7gKkykTN52ZMrCbZbHOC0IWHBBAK1vE2OSUd1A%2FS2af6SOFIlugoDEFcIaQ04otZ1DbDg6rrXmwuw%2FC7DrutEb%2F8KPXpcl6kaW89OCGDL8VvStVxUR2FFQUSQbNNa39MxgFssQBTy3JBgs2hPctoV%2FRaVaGYWEPLg2WiD9lI4v1k3O9viPFqacPdWn0rKHQydm6ZUj8WAIH2fwJ4HWjKox4%2BblkxAARiPk4EuerG5l5LalBdqxBnKbANGNDjhVxqCknGT7bRWVbUUcA0D5n9e90ckdHSow18SJGjaKwFt2awCGS9dEwsLTcyQY6pgEEmWjG75w51G6rNO3zpxJDobJyDwBfzlMOTtZ4QkrRvMfYCBqzXhZ7qU2Z%2FWne9dt%2BlkIZQhQdC%2BjBXdhQtdeuxET%2By3Yli3m9en5b5GATOIusC6Fbfl08xwA71lOr0pq0Ehip42V%2FA5Od3qlt%2BqAdcmHX4047rz8DcEEJDRRcYm6Slx9aDO7bKEZEhmRtmB8YoV6j0GoFx0Vgp2KKhh2HBRtFimPL&X-Amz-Signature=7d5fbd4c0b884c91e008323c24f2a1e0a599ed6689f3f5fbbd04bb9ae2b46548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

