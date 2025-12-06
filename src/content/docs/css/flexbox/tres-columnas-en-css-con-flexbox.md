---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYUU2PW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtD5hywiNh%2F4oTn2%2BwU%2BMD1sjCmEgyaC2jK7T2NsuZ4AiEA7Pj%2F0IW2SoEqeICgxSKuThdtXFZ%2BZdxSmODau9coOJUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDO%2BhTzrGJULhVWPBxSrcA2rNLtCzBfUQ%2B%2BaXcZqVJxodfWjJnHp2kPigS0UiYHRb8oBufFwYzaoAmecn58RCsM8eFFP5bkd60NuQq%2FXdpxHGVHpmQdVfvePOP6xfEqVYCvgS6masodH5ooUG5%2Bt51JVojSoxQLPIFwkNRI0wHj%2Bo2U%2B7jfd33eGHHv%2B%2FSNrXYcqJFQxJqavMdN%2BiWJRyDfV1Aqs2Ej%2B3WiFHUxBWb6abbIfDZbu3uaqCJeeuEbjJewc54SHMM9uAkP%2FsS4x5AOfVDYwTm9vyyylDdle5ipQQ%2FeuQWySXoAa4M24A%2BT6%2BSpt%2FNfLFrI1TP8fYRRRoRM0kxWghoWYrVuK%2FlPH6i0tbQMEFpOj%2BqPnFCL%2BIOXzxprOtd4QPHZk3dzul%2FPkugB75YIpd2TAMESfhXYluekBJXfyvnhlz71092w2%2B81ZXx9J11wyHg6NeAaWfhZZat%2BkkTi0PpJsa%2BoXBEpp9qZJngaaQnEpLKXbfpnfnlSSNxWaq0FICbgXZ0XY2QoW5yNFTTuyMjXI500DtNNV8eLsSx5BpMTg7X3vrBq7GARk4i9euJjuUqCcGF8f6DipRJJZNWWDMgYzubtwlYZ9jmZR2T4amWb%2FGKA32CO9QhkhdU8dd05daqdV1O3P7MOenzskGOqUBNsDG0%2BEXcN7lAcl2u97lhecf%2Fjtrd1LgbvDnQSXa7YHMYJdChD3uRsavLc5%2Bc8D534iilxuBvm8s2SoIv94OZNf5tJSoN679mM2YrypFFVA2jHcwcGhSt74N9thX21ScdHvNwG4jDcHxZ%2FzSG%2F6D1SjZwV4XmAzJ8xCoJCk%2B1v%2FzTmYaC91PcaaTsEEqe4pEJsAnqPHay9mg%2BQf1zBaG0JB0j0ei&X-Amz-Signature=06fb4bd28bbd73795e95d67323cd3f32090d6b6486130f81e2f5937615ce509e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYUU2PW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtD5hywiNh%2F4oTn2%2BwU%2BMD1sjCmEgyaC2jK7T2NsuZ4AiEA7Pj%2F0IW2SoEqeICgxSKuThdtXFZ%2BZdxSmODau9coOJUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDO%2BhTzrGJULhVWPBxSrcA2rNLtCzBfUQ%2B%2BaXcZqVJxodfWjJnHp2kPigS0UiYHRb8oBufFwYzaoAmecn58RCsM8eFFP5bkd60NuQq%2FXdpxHGVHpmQdVfvePOP6xfEqVYCvgS6masodH5ooUG5%2Bt51JVojSoxQLPIFwkNRI0wHj%2Bo2U%2B7jfd33eGHHv%2B%2FSNrXYcqJFQxJqavMdN%2BiWJRyDfV1Aqs2Ej%2B3WiFHUxBWb6abbIfDZbu3uaqCJeeuEbjJewc54SHMM9uAkP%2FsS4x5AOfVDYwTm9vyyylDdle5ipQQ%2FeuQWySXoAa4M24A%2BT6%2BSpt%2FNfLFrI1TP8fYRRRoRM0kxWghoWYrVuK%2FlPH6i0tbQMEFpOj%2BqPnFCL%2BIOXzxprOtd4QPHZk3dzul%2FPkugB75YIpd2TAMESfhXYluekBJXfyvnhlz71092w2%2B81ZXx9J11wyHg6NeAaWfhZZat%2BkkTi0PpJsa%2BoXBEpp9qZJngaaQnEpLKXbfpnfnlSSNxWaq0FICbgXZ0XY2QoW5yNFTTuyMjXI500DtNNV8eLsSx5BpMTg7X3vrBq7GARk4i9euJjuUqCcGF8f6DipRJJZNWWDMgYzubtwlYZ9jmZR2T4amWb%2FGKA32CO9QhkhdU8dd05daqdV1O3P7MOenzskGOqUBNsDG0%2BEXcN7lAcl2u97lhecf%2Fjtrd1LgbvDnQSXa7YHMYJdChD3uRsavLc5%2Bc8D534iilxuBvm8s2SoIv94OZNf5tJSoN679mM2YrypFFVA2jHcwcGhSt74N9thX21ScdHvNwG4jDcHxZ%2FzSG%2F6D1SjZwV4XmAzJ8xCoJCk%2B1v%2FzTmYaC91PcaaTsEEqe4pEJsAnqPHay9mg%2BQf1zBaG0JB0j0ei&X-Amz-Signature=546b36d263792a15d5864060f37506d9af08fdaca4882081988cad241b70e350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

