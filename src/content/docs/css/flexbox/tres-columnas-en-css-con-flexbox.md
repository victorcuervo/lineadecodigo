---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRV6QXJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1YJoj%2BWNmztU1GEZo6MKSuW6WiVEBqJ5Uzu7QaKUUKAiEAsV6QeZIg3qm08BQe4%2F7to5Etwpqq%2BqlFtcguGYZ4%2F0Uq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEruOFVcG8PbZzimHCrcA%2BKdVKpy%2FVCsbNpgWqt1zJZOpEHaSfm1FsJsEymkxCwaKopOyVfA2gwET1ptr3b2zy0fdI5jXq0uJWLX4R4PE4BSqBHyL0PbeUUXh3Jswm%2Fc3e5Wg4ETJqRSGHgPD6ALC8caBMEDYe5aEJbQLuQTCDBWPr0gtmYioKvJXwbbh4jVJmnGRLVq%2BF1TehGqHIOOe5rB2%2BfMa2ddcOrffLGZc1%2FMPaT%2B%2FcODuEO9fSDQt9%2F%2BwyUF%2FTr7T6lp8RhqeYu8nsgDXgVUEnYfUhbpUxGLFWTqM51aLfZYrXNiUuH6Gr7MrxF1TEEdwRT4o2ok7dkiyyZhi2%2FEJM%2BMpvhKxmbHvUXhRJ8y%2BfScisL7Tdnc%2FIBADJlBR0z%2Fi3nhQo3qLRsH12TL82X0VtzgB90DFextqOuLc8TSL%2FLOvoihn5m1KYny4TQqAA35JNfna0G%2B0JZgNlgI8f6uTetim9zWz8RX8EX7OVcqAvdFPRBGtG8kcSOobfL%2BDcOFSawgM%2FBdzAwnxreaVltHLSUpR5O%2FjU8EJP%2FtXih789p1BRvkCk5hqiBY17OmqJVwu4%2BNnkDvRcPiXz%2BicFMTPD8%2BW2vzfJCrDuu9ntTr6ZkMh5I1TqGXMwpcDwJoXFwmFfoRohxSMO7DzskGOqUBRv7TK9n3zvWOVetN9fyNcJf76LhsgcjliN1xz9CxP9w79CmRZNhERb0JmuE7RMJrGM%2BBMRmMgGqZ2oTZujr60VD9AYgXAXtvsGYr6WklnBSZEECdsEzb03A2%2FmL5nvVc0Eihn8sSQjL0D%2BDca81oEfgIOz8gwOXcT%2FB6VflOS99zRmXBGb3qiqvXy3jiL2yi%2Bhs8REoy4WmieKu2P%2BPSiR2noW5W&X-Amz-Signature=8d9f0369000882e0c4e4c2adcc09f51b614021605c3055404551ed2fe10d390e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRV6QXJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1YJoj%2BWNmztU1GEZo6MKSuW6WiVEBqJ5Uzu7QaKUUKAiEAsV6QeZIg3qm08BQe4%2F7to5Etwpqq%2BqlFtcguGYZ4%2F0Uq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEruOFVcG8PbZzimHCrcA%2BKdVKpy%2FVCsbNpgWqt1zJZOpEHaSfm1FsJsEymkxCwaKopOyVfA2gwET1ptr3b2zy0fdI5jXq0uJWLX4R4PE4BSqBHyL0PbeUUXh3Jswm%2Fc3e5Wg4ETJqRSGHgPD6ALC8caBMEDYe5aEJbQLuQTCDBWPr0gtmYioKvJXwbbh4jVJmnGRLVq%2BF1TehGqHIOOe5rB2%2BfMa2ddcOrffLGZc1%2FMPaT%2B%2FcODuEO9fSDQt9%2F%2BwyUF%2FTr7T6lp8RhqeYu8nsgDXgVUEnYfUhbpUxGLFWTqM51aLfZYrXNiUuH6Gr7MrxF1TEEdwRT4o2ok7dkiyyZhi2%2FEJM%2BMpvhKxmbHvUXhRJ8y%2BfScisL7Tdnc%2FIBADJlBR0z%2Fi3nhQo3qLRsH12TL82X0VtzgB90DFextqOuLc8TSL%2FLOvoihn5m1KYny4TQqAA35JNfna0G%2B0JZgNlgI8f6uTetim9zWz8RX8EX7OVcqAvdFPRBGtG8kcSOobfL%2BDcOFSawgM%2FBdzAwnxreaVltHLSUpR5O%2FjU8EJP%2FtXih789p1BRvkCk5hqiBY17OmqJVwu4%2BNnkDvRcPiXz%2BicFMTPD8%2BW2vzfJCrDuu9ntTr6ZkMh5I1TqGXMwpcDwJoXFwmFfoRohxSMO7DzskGOqUBRv7TK9n3zvWOVetN9fyNcJf76LhsgcjliN1xz9CxP9w79CmRZNhERb0JmuE7RMJrGM%2BBMRmMgGqZ2oTZujr60VD9AYgXAXtvsGYr6WklnBSZEECdsEzb03A2%2FmL5nvVc0Eihn8sSQjL0D%2BDca81oEfgIOz8gwOXcT%2FB6VflOS99zRmXBGb3qiqvXy3jiL2yi%2Bhs8REoy4WmieKu2P%2BPSiR2noW5W&X-Amz-Signature=c85a091120dc08952ae6006444de985a6e1e8d741075159019b656bc51efc35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

