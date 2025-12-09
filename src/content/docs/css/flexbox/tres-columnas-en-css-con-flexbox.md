---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYHWJYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFpA1hJtBz%2BGLXrtScvH3%2FuWrFRssL3l1lXDR9pOLPiQIhALXfVOiDUN98WLvLPC47g6XdBubRQlOhx9LimFh0sgiaKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbwR2JziOLG4JwbOEq3ANBnBoujaXgutybuXa3PWz1%2Ba4JGbiv6i9dY9EmXvXSdLQWgPitdOq1fpXqER0OAsQl0WyupWFXtOG6aNDHjScSBw4wDfE8mssreVk2FcEisQ8FfpSQNNywq%2FrptmrbQAZSQ%2BIqXgpidKnoUvjyr7h8hJ88cICDcCIY%2BQ2HuTUYDt6b8pjDOV5b45TNyjDNuF1bb%2BejOisUBe2WbBg8hWrvodHdk%2FhUmW62VoMyGNZ5vtXAabQgEvC%2F6jc96kIKIpelXGdUdlCnZPyz888G6jlYJn4TfSmQxeUM%2F%2F9sFNnXXHC0MpHIj6UalWlG3yAv%2Fgeee8xadPCIOm5yonfQsCS1797rMGjsc9plRPdoL9GEM0d9x4A3ZkXwEuV%2FFAqWZUZPa4eM00hprapcu%2BfYJGK4NI9gNSq3%2F5i9wnGPE15HjBrJ0qbow4qZh95ly6jjJLD070jAinuvO%2B02UycDDcs%2FPSlZZo7lV5%2B7dngG%2BnaKDGUPzXYaIH%2BstQSljPG6he6O8GiPA%2Ft%2FwNhF0Dsb55PiwYoPLvtaD4JLICzt4tXBd6LAG8a43JmisKOLopXGMAGrKPO6AmQmSUTxKgv7p%2Flw0Gv2WLS%2Fx9pLuJBsazXGkzWhDJkrk%2F%2FiVptuyzC3iN%2FJBjqkAYW8oA7g9i9to2i%2Fd6cZ1y5tr3M6Ld%2BQvGBb2sCmgeyj6HcfmmzlvyPSTbuG69yuGG4SaT46NUcvp1uJp5ZKBRn%2BtjZNN7SbYZY8PyQeMKeEFRZmdbDlGVaaCg9k2MgGQRgPADtusOMbCRoHPsW1B0q%2FrDFeJTMMNYKGbHM5TTh7vvBejRwh9S1VJ2jY5GngFY0SCDYQ0y%2Bi6IPfvnMts48solT0&X-Amz-Signature=00d96bcb2f3219eaa62b8d44c8e58e100e3070efd70e67c86abe4ce5215ca1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYHWJYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFpA1hJtBz%2BGLXrtScvH3%2FuWrFRssL3l1lXDR9pOLPiQIhALXfVOiDUN98WLvLPC47g6XdBubRQlOhx9LimFh0sgiaKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbwR2JziOLG4JwbOEq3ANBnBoujaXgutybuXa3PWz1%2Ba4JGbiv6i9dY9EmXvXSdLQWgPitdOq1fpXqER0OAsQl0WyupWFXtOG6aNDHjScSBw4wDfE8mssreVk2FcEisQ8FfpSQNNywq%2FrptmrbQAZSQ%2BIqXgpidKnoUvjyr7h8hJ88cICDcCIY%2BQ2HuTUYDt6b8pjDOV5b45TNyjDNuF1bb%2BejOisUBe2WbBg8hWrvodHdk%2FhUmW62VoMyGNZ5vtXAabQgEvC%2F6jc96kIKIpelXGdUdlCnZPyz888G6jlYJn4TfSmQxeUM%2F%2F9sFNnXXHC0MpHIj6UalWlG3yAv%2Fgeee8xadPCIOm5yonfQsCS1797rMGjsc9plRPdoL9GEM0d9x4A3ZkXwEuV%2FFAqWZUZPa4eM00hprapcu%2BfYJGK4NI9gNSq3%2F5i9wnGPE15HjBrJ0qbow4qZh95ly6jjJLD070jAinuvO%2B02UycDDcs%2FPSlZZo7lV5%2B7dngG%2BnaKDGUPzXYaIH%2BstQSljPG6he6O8GiPA%2Ft%2FwNhF0Dsb55PiwYoPLvtaD4JLICzt4tXBd6LAG8a43JmisKOLopXGMAGrKPO6AmQmSUTxKgv7p%2Flw0Gv2WLS%2Fx9pLuJBsazXGkzWhDJkrk%2F%2FiVptuyzC3iN%2FJBjqkAYW8oA7g9i9to2i%2Fd6cZ1y5tr3M6Ld%2BQvGBb2sCmgeyj6HcfmmzlvyPSTbuG69yuGG4SaT46NUcvp1uJp5ZKBRn%2BtjZNN7SbYZY8PyQeMKeEFRZmdbDlGVaaCg9k2MgGQRgPADtusOMbCRoHPsW1B0q%2FrDFeJTMMNYKGbHM5TTh7vvBejRwh9S1VJ2jY5GngFY0SCDYQ0y%2Bi6IPfvnMts48solT0&X-Amz-Signature=40c27b3b454d8ab91951df696b26164991fb607d8fcc3a4611b6fd0843b547d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

