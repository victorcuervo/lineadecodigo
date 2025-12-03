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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTXYLGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCbYuIugJe5zTOuQMGihNZlyGtE%2FNxC1jLtWT83Rhc74wIhAIjCeK%2FKKrNosJp7sRK9b5gfVNcDgjd%2B7vqzIL3MSrIqKv8DCCEQABoMNjM3NDIzMTgzODA1IgyGVPULu5PIhwedyx8q3AOqGFs%2FJzasy%2FBZ%2B6GaokdUfooaxXRZTYyc6%2F%2FDOn3fY4pG49dJv2ODdDRGlDhoPx%2FL5Nn22HwBHC68TfoEnJ5hkfwvWeLZvJQEqff906GmP939%2B8RsvUkVSwQaxICdOQz%2BgNl4hRoh3DwGmeVrTLXfidw%2Ftg0kITzSp8Iq%2B5orCGzqpsbHSauRv1uQnxQatDohuVvJqyBTWsDkTqY%2FDqZJ%2B8T7qU5E0FwpfxOZ0x1%2BYfneesXlrhKP0ZFNSyxha%2FQboEGQACIjwMTvhO25GWtYbWfz%2FpbQyt7pBtNeE%2FHAsO4fyX27hj5iTBLDLq%2Ba%2B%2F0Z7LiJukhGfzndkYwnb757SaCX95zgFbS%2BRkEn6Dnu2Gi9ijJfXtmeDD4H5z%2Buaf5GvaJH99ea7MtZaV%2BmJ%2BOVUT3W3S4jyNzn3yEF1E3J%2Bq8iQMaldW4rDkVPEjckR%2BBFmZJwqWUuzUCo84P%2BKUsbnbnTPwNyOpGkCUAXgCi5DDDPe9dFXOGOPBnPEbiTyLcduEdPYyoj4GUMrTLVaas9RmeUJlsoMnfBsN%2Bbo%2FT9dq8nxrJ8bqA9z%2Fj518cfPrvSasL6zqz0R3xAgBEUkwLY1AfuspZlXDflnLOr1sMLwU9qi2p57Zy13HRGWjC2%2F73JBjqkAYkpvbqtY%2F%2Fkz512eTG1BJf94k5QDP6z6kuHiz%2BirTh1QdiPDN1ovPTE8SyEJVvO9sviCmpjX%2F%2FZqWYbYELuXagKBX3V9S85Piwl0uJHYfgmcoLatNKW6opkROCqDOnjAPGrghMMRjp0R3bXL8dAy0%2FCaIZth5IRkYcOeppCruOkRf4VsNZQz69IzGGqcyb1HMtCTcpfliP%2F573XE1zFwVX6ddSh&X-Amz-Signature=ac9b490375beee4d4c77595917929d0e7e2c4f2bce12f259997935cdadbd8f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTXYLGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCbYuIugJe5zTOuQMGihNZlyGtE%2FNxC1jLtWT83Rhc74wIhAIjCeK%2FKKrNosJp7sRK9b5gfVNcDgjd%2B7vqzIL3MSrIqKv8DCCEQABoMNjM3NDIzMTgzODA1IgyGVPULu5PIhwedyx8q3AOqGFs%2FJzasy%2FBZ%2B6GaokdUfooaxXRZTYyc6%2F%2FDOn3fY4pG49dJv2ODdDRGlDhoPx%2FL5Nn22HwBHC68TfoEnJ5hkfwvWeLZvJQEqff906GmP939%2B8RsvUkVSwQaxICdOQz%2BgNl4hRoh3DwGmeVrTLXfidw%2Ftg0kITzSp8Iq%2B5orCGzqpsbHSauRv1uQnxQatDohuVvJqyBTWsDkTqY%2FDqZJ%2B8T7qU5E0FwpfxOZ0x1%2BYfneesXlrhKP0ZFNSyxha%2FQboEGQACIjwMTvhO25GWtYbWfz%2FpbQyt7pBtNeE%2FHAsO4fyX27hj5iTBLDLq%2Ba%2B%2F0Z7LiJukhGfzndkYwnb757SaCX95zgFbS%2BRkEn6Dnu2Gi9ijJfXtmeDD4H5z%2Buaf5GvaJH99ea7MtZaV%2BmJ%2BOVUT3W3S4jyNzn3yEF1E3J%2Bq8iQMaldW4rDkVPEjckR%2BBFmZJwqWUuzUCo84P%2BKUsbnbnTPwNyOpGkCUAXgCi5DDDPe9dFXOGOPBnPEbiTyLcduEdPYyoj4GUMrTLVaas9RmeUJlsoMnfBsN%2Bbo%2FT9dq8nxrJ8bqA9z%2Fj518cfPrvSasL6zqz0R3xAgBEUkwLY1AfuspZlXDflnLOr1sMLwU9qi2p57Zy13HRGWjC2%2F73JBjqkAYkpvbqtY%2F%2Fkz512eTG1BJf94k5QDP6z6kuHiz%2BirTh1QdiPDN1ovPTE8SyEJVvO9sviCmpjX%2F%2FZqWYbYELuXagKBX3V9S85Piwl0uJHYfgmcoLatNKW6opkROCqDOnjAPGrghMMRjp0R3bXL8dAy0%2FCaIZth5IRkYcOeppCruOkRf4VsNZQz69IzGGqcyb1HMtCTcpfliP%2F573XE1zFwVX6ddSh&X-Amz-Signature=8bb2f503881f0e64af34f0cc6ee37bddc26d63d0ae7666b40898c7339a947903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

