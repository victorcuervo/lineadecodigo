---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR3C7FGY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCC%2B%2FmH%2BWUKbsMi7LKqugQF%2BHBwtr8pUiJuz0a8xoZgwQIhAP%2BuHqH%2FkVf1f9%2BZkujsdq5UD%2BMmn1rQFx0RQtmnNE%2B8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzoQaxj3Chyg6HJjLwq3APt0RQtjQcxdNUtYQwImAD8ogwu1vS39VicYQOz2fHHbBH%2F7PGTs7MRgNs32qW8rDEpon4%2FLYa83wI3IUnUBCUkKBVs9EVqxslr0H76cOrrQTVNzxGhoidMG6bhBGozR%2F1YsuEg2BGP4anU6KHf%2Bo829UsU%2BE3E7NOftQcjS1Jku913nq21%2BzbDbimQRS%2B16w6%2BMv4iw9kn3Y301AqawnI6bvTe1VXRCLJM4ZaQ%2FRVCIubFGb3KG7trO5rGqBw5EVQdiU5BUHWeem0xQIPOwFuIbyepbZHpiQToHdT0CxBrzOa6u9YjdS6KT0bKukd2mM%2FzQ2KfCjbbqaP%2FGf8uZD0n9QuBHp%2B3aZFdZf9LOf3PB6LB3VP%2Fu4nSMATfhd%2B8zWRN1De%2F9AWSp2%2FEIW%2BNVy64Tf5oE2S%2B4r%2BfnnUVmXXGOpX2pIcFmBRHFQMpG7ooY%2B8b46fnCTl0Hl5FeL5Q%2BupNW1%2BDckiR06ot1%2B5N%2FLrWYvsotJVPB0epyzStp4RGJxTs5PgBMYwsrfoiQoeFbPmeDakMHuon1xOqvcbGSJt1uFwsATk%2FsvNDOhC4O%2BZoJWT8DP9emMUkeCfq1iBn8WXMKBY0lh7Rv7RG4ELeQMHxI70GL0jiVeL7cGqLDzD9lL7JBjqkAY7Uzdu79wVkvNCH8qYdK7%2FoYgk6w4ono7Yi8pv7ZCmYtrJ1GlCMFwv5riKVSAY1atzce2KjlN9fkumvyvc4sNFkuMXnTgcb%2FJHFZrfsOTeG7UV2z871f7pBR4krzO2OwfDtz5rBr%2F42E%2Bu37CmUh0Zt0ZmTvV8Mi67fP0DNXS%2Ff6A5t%2FvYqbW9l54boYDqwDxkQ9sweWU4A%2FgRM6bx%2B6FtgKBrb&X-Amz-Signature=6886493e61400262c2ac709cbfb54ad6e8f8737cebdf42b824fea3766c89baaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR3C7FGY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCC%2B%2FmH%2BWUKbsMi7LKqugQF%2BHBwtr8pUiJuz0a8xoZgwQIhAP%2BuHqH%2FkVf1f9%2BZkujsdq5UD%2BMmn1rQFx0RQtmnNE%2B8Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzoQaxj3Chyg6HJjLwq3APt0RQtjQcxdNUtYQwImAD8ogwu1vS39VicYQOz2fHHbBH%2F7PGTs7MRgNs32qW8rDEpon4%2FLYa83wI3IUnUBCUkKBVs9EVqxslr0H76cOrrQTVNzxGhoidMG6bhBGozR%2F1YsuEg2BGP4anU6KHf%2Bo829UsU%2BE3E7NOftQcjS1Jku913nq21%2BzbDbimQRS%2B16w6%2BMv4iw9kn3Y301AqawnI6bvTe1VXRCLJM4ZaQ%2FRVCIubFGb3KG7trO5rGqBw5EVQdiU5BUHWeem0xQIPOwFuIbyepbZHpiQToHdT0CxBrzOa6u9YjdS6KT0bKukd2mM%2FzQ2KfCjbbqaP%2FGf8uZD0n9QuBHp%2B3aZFdZf9LOf3PB6LB3VP%2Fu4nSMATfhd%2B8zWRN1De%2F9AWSp2%2FEIW%2BNVy64Tf5oE2S%2B4r%2BfnnUVmXXGOpX2pIcFmBRHFQMpG7ooY%2B8b46fnCTl0Hl5FeL5Q%2BupNW1%2BDckiR06ot1%2B5N%2FLrWYvsotJVPB0epyzStp4RGJxTs5PgBMYwsrfoiQoeFbPmeDakMHuon1xOqvcbGSJt1uFwsATk%2FsvNDOhC4O%2BZoJWT8DP9emMUkeCfq1iBn8WXMKBY0lh7Rv7RG4ELeQMHxI70GL0jiVeL7cGqLDzD9lL7JBjqkAY7Uzdu79wVkvNCH8qYdK7%2FoYgk6w4ono7Yi8pv7ZCmYtrJ1GlCMFwv5riKVSAY1atzce2KjlN9fkumvyvc4sNFkuMXnTgcb%2FJHFZrfsOTeG7UV2z871f7pBR4krzO2OwfDtz5rBr%2F42E%2Bu37CmUh0Zt0ZmTvV8Mi67fP0DNXS%2Ff6A5t%2FvYqbW9l54boYDqwDxkQ9sweWU4A%2FgRM6bx%2B6FtgKBrb&X-Amz-Signature=c6aeeb9808599f2fd3b3c8adebbad677acaeee0e654edcf4560d23fae5ed4090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

