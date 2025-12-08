---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBD2TCA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOLn4w32f1u2b1PUaCfzIPsqckp80mDWNp0NHFCxdAuAiEA5gIHSJYZpMKydkICFE2jszfGTm29fSqHeZUzoMpv9vIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDHT1v4Jel4PbR0JCrcA40tFMrsat7z5kQdwTGrGDd6wbEJZcW%2Fa%2BrL%2FyUIZujCcbYKRk02sk34oKUgpkZZq1z0yvWFsOYJ%2BCMZMmLZveNB9WciUYP8%2FmTXwlJUCQyNQmPH1o1MIsdIG3QzGlHkkkC4OcTbSg%2FN%2BUw6pxuaqL4hMZVuw%2BJH9fbUV9MSD01KTgbbWc5JfyU4wZXSan3xTmoi6bctreDFENcHJzdCef09V%2BKq%2BMBvu2YRg8VPfMJNQOKL9dXLknclcD0mTKIRVA4jwoZcrfrI4f%2FD931IYsR5%2Fupg%2FMyiwzSEZjoGbQRCDrQ4kWjSmkhmonwwpv15QarFpQaMsOgj4H9v%2F0VaulYOBMtRX8ToEwm8gp%2BVHZdt7jSLpkn5EM7wJ0VM7jeWs5OKxqna5AkTy%2B1Vj3%2FElc%2FGij%2FBE%2FUNJ2dEiaXovDG58Y%2F2Fj4%2F4Aqx%2BXO%2FASFbQXgu1BzB0ha9nvUFmWYRbueLGCDeereroyITYe55JnnHpQtxKMXnycv4utPedNIXzKqVL%2FyDpmUF%2B%2B5h4sHxirYggkqmqiAixsqqNnz2U3EO7yO5Z4E%2FTQr9joI9P7foOcLW58N2olzgp5KIaTgskHgnoqkC2lU9GJd2k5bLjJglwEbvh7B8Ww%2F1z1p5MP%2BT2ckGOqUBID7vAo9ulkRoZ9mJJZ53lvdLjYiUa9NIKxEAuErDBgWmriCbF5zi9TUEVlwVKMAtqsCiukeBEkOexWLr65tyj9d3EG6U3zkjmA7Pw5ycY8j9EsHU2l7HgPTdlsx9fK0LHMt%2FdPbWCOaYHrU%2Bbl1JGJ9WUvx2pel1NigIRFX9tiL1Jc83tdNZSlBnWMIAqAOvsloKqzNwoeX4SZtSfsi%2FrzsgYzpS&X-Amz-Signature=c73d5aa291c79504eb4a003050e7d67852312a27170f691952fe4865ac09e257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBD2TCA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOLn4w32f1u2b1PUaCfzIPsqckp80mDWNp0NHFCxdAuAiEA5gIHSJYZpMKydkICFE2jszfGTm29fSqHeZUzoMpv9vIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDHT1v4Jel4PbR0JCrcA40tFMrsat7z5kQdwTGrGDd6wbEJZcW%2Fa%2BrL%2FyUIZujCcbYKRk02sk34oKUgpkZZq1z0yvWFsOYJ%2BCMZMmLZveNB9WciUYP8%2FmTXwlJUCQyNQmPH1o1MIsdIG3QzGlHkkkC4OcTbSg%2FN%2BUw6pxuaqL4hMZVuw%2BJH9fbUV9MSD01KTgbbWc5JfyU4wZXSan3xTmoi6bctreDFENcHJzdCef09V%2BKq%2BMBvu2YRg8VPfMJNQOKL9dXLknclcD0mTKIRVA4jwoZcrfrI4f%2FD931IYsR5%2Fupg%2FMyiwzSEZjoGbQRCDrQ4kWjSmkhmonwwpv15QarFpQaMsOgj4H9v%2F0VaulYOBMtRX8ToEwm8gp%2BVHZdt7jSLpkn5EM7wJ0VM7jeWs5OKxqna5AkTy%2B1Vj3%2FElc%2FGij%2FBE%2FUNJ2dEiaXovDG58Y%2F2Fj4%2F4Aqx%2BXO%2FASFbQXgu1BzB0ha9nvUFmWYRbueLGCDeereroyITYe55JnnHpQtxKMXnycv4utPedNIXzKqVL%2FyDpmUF%2B%2B5h4sHxirYggkqmqiAixsqqNnz2U3EO7yO5Z4E%2FTQr9joI9P7foOcLW58N2olzgp5KIaTgskHgnoqkC2lU9GJd2k5bLjJglwEbvh7B8Ww%2F1z1p5MP%2BT2ckGOqUBID7vAo9ulkRoZ9mJJZ53lvdLjYiUa9NIKxEAuErDBgWmriCbF5zi9TUEVlwVKMAtqsCiukeBEkOexWLr65tyj9d3EG6U3zkjmA7Pw5ycY8j9EsHU2l7HgPTdlsx9fK0LHMt%2FdPbWCOaYHrU%2Bbl1JGJ9WUvx2pel1NigIRFX9tiL1Jc83tdNZSlBnWMIAqAOvsloKqzNwoeX4SZtSfsi%2FrzsgYzpS&X-Amz-Signature=8ff885a8b0d7c95d91c3d71a7182d3aba1779e550fd6348a1cb9aad719e30e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

