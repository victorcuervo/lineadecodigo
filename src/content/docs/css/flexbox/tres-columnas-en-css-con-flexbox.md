---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZU3KB4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhttIKKJQ3TSXG2sgDw6a%2BVCAAp5vAYPmNBsVniErYyAiEAq%2BuK5JcLZkg6Zv3O4LUWKzrDdA1WDkMKGseISfRCZicq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLovCe9GlnP1bqqV8SrcA0QjWrtPTWEPapYNhBKrmze4eRlQAXfLN1LB8Z6M46YnV2sFn9zc67Jidc3UgCVmX7U1dSfjH5Oyh9krDbHrw957A7VTL%2F31NawPDzCCciR9WVjwEelApD87S4%2FcstY3G4wcRq42e7z3acYCjaJukJmw7yhA56AoLq3PSMUSUe2rtd%2FqBph%2FhSpFX6OVKgpcnYrH91WD9zSqX%2Byn0iMuGAiaLuQuxCZE7xUqykLPwU9V%2FEtfLL0aXiYF4Mft0kYxrNLRjIvWLTChttyiI3JiER%2FYVcYvCJGBlYSC%2BHKEcBqp2fQH0i%2BrfaaLIXuzQ6b8lOoB0anHQvVfdN%2FlysWAe7bCPknKyB5gm6KVQI%2Fq0BPEjviFlIDwqzjYsxGOg3NOcI%2BLNiRh%2BFdWNf1NUanh%2FMyrZaW7hl610t3uwFskCjYsz6gcH6NPh0qf2cP6ZnDBlk1e9IDU2GGJlsgC46y43y16iwFw4Q3sR0oxoO1XbwIEWOe06TAmOUrFrXn%2BWEKO6l%2F2WM1joMpVz1YOUCvvlNClm%2BvkdzrNNi1cGEb%2FShyVm0LswW5WbeKdRI2BWsYRwtOyqX2NJWH%2FAxC9JNO1ahoMFffxe9%2B6C3MXb9lwO8EBTcjDk%2FDHpKtH3RAyMNTrz8kGOqUBhaOhBZC7dMeQR%2B3iIgB1Z9okPH8JSlgvM6ycXT%2F4fuSRXZkJ%2BgbLHSXg5K%2B6%2FqyVK5fiekwwM3947jMZMTOKgK79q1ScDxzNXfoxVY8%2FjPx35fy03zfjoWUYRl4EnUZbnT%2Fr6eHDm%2F%2FaoKq2R9nfSAERvr%2FqysUR1udbnuR6tAPnc94eb%2BeJSgP2ISkyQMXmz68DianTaWW6KNTbbXdRkhU5DA5%2B&X-Amz-Signature=32fb737d085e23aa4d866593bcecf2e3a8a55c34e1bf9e58ecbdeed792b88d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZU3KB4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhttIKKJQ3TSXG2sgDw6a%2BVCAAp5vAYPmNBsVniErYyAiEAq%2BuK5JcLZkg6Zv3O4LUWKzrDdA1WDkMKGseISfRCZicq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLovCe9GlnP1bqqV8SrcA0QjWrtPTWEPapYNhBKrmze4eRlQAXfLN1LB8Z6M46YnV2sFn9zc67Jidc3UgCVmX7U1dSfjH5Oyh9krDbHrw957A7VTL%2F31NawPDzCCciR9WVjwEelApD87S4%2FcstY3G4wcRq42e7z3acYCjaJukJmw7yhA56AoLq3PSMUSUe2rtd%2FqBph%2FhSpFX6OVKgpcnYrH91WD9zSqX%2Byn0iMuGAiaLuQuxCZE7xUqykLPwU9V%2FEtfLL0aXiYF4Mft0kYxrNLRjIvWLTChttyiI3JiER%2FYVcYvCJGBlYSC%2BHKEcBqp2fQH0i%2BrfaaLIXuzQ6b8lOoB0anHQvVfdN%2FlysWAe7bCPknKyB5gm6KVQI%2Fq0BPEjviFlIDwqzjYsxGOg3NOcI%2BLNiRh%2BFdWNf1NUanh%2FMyrZaW7hl610t3uwFskCjYsz6gcH6NPh0qf2cP6ZnDBlk1e9IDU2GGJlsgC46y43y16iwFw4Q3sR0oxoO1XbwIEWOe06TAmOUrFrXn%2BWEKO6l%2F2WM1joMpVz1YOUCvvlNClm%2BvkdzrNNi1cGEb%2FShyVm0LswW5WbeKdRI2BWsYRwtOyqX2NJWH%2FAxC9JNO1ahoMFffxe9%2B6C3MXb9lwO8EBTcjDk%2FDHpKtH3RAyMNTrz8kGOqUBhaOhBZC7dMeQR%2B3iIgB1Z9okPH8JSlgvM6ycXT%2F4fuSRXZkJ%2BgbLHSXg5K%2B6%2FqyVK5fiekwwM3947jMZMTOKgK79q1ScDxzNXfoxVY8%2FjPx35fy03zfjoWUYRl4EnUZbnT%2Fr6eHDm%2F%2FaoKq2R9nfSAERvr%2FqysUR1udbnuR6tAPnc94eb%2BeJSgP2ISkyQMXmz68DianTaWW6KNTbbXdRkhU5DA5%2B&X-Amz-Signature=a0e7a5d0557898fa141f253b0510a26446114d18387499baf3ce6e57349b012c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

