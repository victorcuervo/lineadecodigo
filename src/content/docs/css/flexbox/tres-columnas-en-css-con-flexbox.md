---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHG5ZVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw8FHXCBi3TXXgXT7utWrFWkKd05EurpMrG2TtQ45sgAiEAis4hpaLZLxbLWiyy2OVrZASTHASQVN6k%2Bmb2gOhaTMkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGCxUy0zkLO3QOAQWSrcAyjNNyDeEKh4khSAtZI2F%2FrCHuNGrI84KEdcJdm1%2F07oNSLBciBR05xtaUVdX8OLUGiWiZK1llAUa%2FUxk%2BXYpZgTAvehLw6K8XeoLdzVgqwOywYGEn%2BDRWtJ%2FnbSi9zfq6ySbJ6X0sS3HAOWKY59ms7J7MdIVTAppTYAhucumpFx%2BfMZrkH2sdayJ6rhdgJSnlUfPzrasub9AYEd3PUUBWMWlEIs%2BLtjJu2EcYeJWNkY812%2FvSuhtraMkmktu97GjztfkWB1LIMb2KhLY0TZXrhq3%2BA%2FRzGIJ4Witds1RcoP%2B2drWGMRf0bQBr%2B4GadcFfre5WO439mNMBUfDQM8ShAkp%2BdxydeAs3YuHlYVMOp61D6YheJsKUiWd4vsHLUe%2BOUOJFJ8tx%2FLo6k%2B9zXnFVKFmfOQLiWw58wzO%2FFVUI%2F6irW9S2q1B8XEt3dpFVu9EZuTfRd3j%2FKnd6eS0TPmGVd45sWYa4HgaMTuCsKepdXoKC9os8uJoIGt8ighXucXu%2FxVVtkfKshTW1KAVMNLcM4FdqV7zDz7JQhe8fE0Ve1QSXOM44yx6IAwguUKWpZx%2B3Xt7KgcuknVFGmrUGo8u0jh25ki1r3P%2B1k%2Bsmxql27XaqvjSAODfKG5g5cqMIiez8kGOqUBUS4Y%2BD0%2BpEbTKpFRohRxC6wB96Z8M1f%2BXZ0n3JyjmhBCV2dqH%2BvRgBS2ueYsz%2BjnIY0oKUbH0NrQLVEF3xRnv82pObdZK2lfOiTF9u30gVZydCxOQ43xKPg59accgElxhpQbSs5dtmqja%2B8XsTOlrF774zQkKt7OSmPk9jmWTs2cqJtDGWPbIRhdv%2FAa5ZNeaR45WmYX0sXx4hOB0qiFuy%2BBH%2B6q&X-Amz-Signature=250535981571219107d06a2027b6e3f83b018ef2a67a6ca6dd51baee5b472652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHG5ZVU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw8FHXCBi3TXXgXT7utWrFWkKd05EurpMrG2TtQ45sgAiEAis4hpaLZLxbLWiyy2OVrZASTHASQVN6k%2Bmb2gOhaTMkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGCxUy0zkLO3QOAQWSrcAyjNNyDeEKh4khSAtZI2F%2FrCHuNGrI84KEdcJdm1%2F07oNSLBciBR05xtaUVdX8OLUGiWiZK1llAUa%2FUxk%2BXYpZgTAvehLw6K8XeoLdzVgqwOywYGEn%2BDRWtJ%2FnbSi9zfq6ySbJ6X0sS3HAOWKY59ms7J7MdIVTAppTYAhucumpFx%2BfMZrkH2sdayJ6rhdgJSnlUfPzrasub9AYEd3PUUBWMWlEIs%2BLtjJu2EcYeJWNkY812%2FvSuhtraMkmktu97GjztfkWB1LIMb2KhLY0TZXrhq3%2BA%2FRzGIJ4Witds1RcoP%2B2drWGMRf0bQBr%2B4GadcFfre5WO439mNMBUfDQM8ShAkp%2BdxydeAs3YuHlYVMOp61D6YheJsKUiWd4vsHLUe%2BOUOJFJ8tx%2FLo6k%2B9zXnFVKFmfOQLiWw58wzO%2FFVUI%2F6irW9S2q1B8XEt3dpFVu9EZuTfRd3j%2FKnd6eS0TPmGVd45sWYa4HgaMTuCsKepdXoKC9os8uJoIGt8ighXucXu%2FxVVtkfKshTW1KAVMNLcM4FdqV7zDz7JQhe8fE0Ve1QSXOM44yx6IAwguUKWpZx%2B3Xt7KgcuknVFGmrUGo8u0jh25ki1r3P%2B1k%2Bsmxql27XaqvjSAODfKG5g5cqMIiez8kGOqUBUS4Y%2BD0%2BpEbTKpFRohRxC6wB96Z8M1f%2BXZ0n3JyjmhBCV2dqH%2BvRgBS2ueYsz%2BjnIY0oKUbH0NrQLVEF3xRnv82pObdZK2lfOiTF9u30gVZydCxOQ43xKPg59accgElxhpQbSs5dtmqja%2B8XsTOlrF774zQkKt7OSmPk9jmWTs2cqJtDGWPbIRhdv%2FAa5ZNeaR45WmYX0sXx4hOB0qiFuy%2BBH%2B6q&X-Amz-Signature=206c06bbc0bdbbcca66b27cb604195aa4717c85f0d974778335190459b6f58f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

