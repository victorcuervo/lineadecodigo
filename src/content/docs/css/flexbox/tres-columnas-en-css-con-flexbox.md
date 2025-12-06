---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERVFEPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTGLfKPRG6WN5ABoMeRGbgQMAR%2BZKITu940QYIU1xptwIgCAk3sLTCjmY4G2Z%2BkJqBgAed2YhDhSyklmGmW1CBc30q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB0wkjcWbGiXen7V3SrcA9%2B58qWxIW1LUUC9GPyBWvz3Tns0JEg13yEYX2j6pGu%2BDJ8kW4RVelbEWlm%2ByMiSGWDygDLyWHwr1CqpaV7bE%2F6dA0BtIv0J90hmulEOTjJ04c%2BuYddZXHnLTlXMLczNvMLB618oNOyz%2Flb%2BRBqXXTL6i341W18BnQMqVXtPkuiFfgS0w5esMdgWOaNeIzZQMWNVCgtBBd3kYRecAJrqRAIWX62NvGwHMXNOlYl45Q1ujjQbuDH3uOmkc74gtrOz2j9UGQ9y%2BPYj86nhHB8StW70vcq29jdVLjZ6WSyIIJtoBo7YsGT7Ow5vbrsbVrSTRxKC7OrlurpeRCiv%2BUfI3fPP0ZYAAnd5DDbQZHV6yE%2BKKmK744qqBZZMhlUhAJ9%2FIZ8ZTXLU2DC5FiU2zkhEK2IFGIEAs83ouRTQRhZMXqj1RmYsQ1DiNwHfSMmUX7IyFnNAW%2BEonDXEyPENw91A0B4XWBotvNrm44HYxNWX5OWQkWfamjivNpjXJ%2FeXln0yy2d3Y7%2BdLgo5v6kfzSEjtUkbCF9r9FNr7zgxTPR06RTSKzU171bv9q%2FdgN6M3vXfGMTJ8xPUOwGIvDnz2s6C89Yrow1yMxQjBqCCeRnYXx7Rwwe4d6ODfIMKMdtMMKyz0ckGOqUB3%2B7G4NMzn%2FbgLfEK4ROJ%2FeHIFaKNXIPSP5KyGJMmOUgSCW7Jbv8%2Fp9XW6floBzVXfeNPypFmkR6wAsmZVjbnBYMLW6kZHwnz0sKOdWfNiNvq0faKeRA2NaCF%2FQ7mVltkuGrcn8X2ruHANBGKyWH2Z5CcJr3fm31Trwo2h32SjgEyar1ny06MrP5xbV16I5ez%2Bl7SOV9exaB56PFwFhJK1SZ38gA4&X-Amz-Signature=49607186e944f263e5e4fc95e10536b5e4d0c07da74d0daa4d1f9c48a02140fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERVFEPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTGLfKPRG6WN5ABoMeRGbgQMAR%2BZKITu940QYIU1xptwIgCAk3sLTCjmY4G2Z%2BkJqBgAed2YhDhSyklmGmW1CBc30q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB0wkjcWbGiXen7V3SrcA9%2B58qWxIW1LUUC9GPyBWvz3Tns0JEg13yEYX2j6pGu%2BDJ8kW4RVelbEWlm%2ByMiSGWDygDLyWHwr1CqpaV7bE%2F6dA0BtIv0J90hmulEOTjJ04c%2BuYddZXHnLTlXMLczNvMLB618oNOyz%2Flb%2BRBqXXTL6i341W18BnQMqVXtPkuiFfgS0w5esMdgWOaNeIzZQMWNVCgtBBd3kYRecAJrqRAIWX62NvGwHMXNOlYl45Q1ujjQbuDH3uOmkc74gtrOz2j9UGQ9y%2BPYj86nhHB8StW70vcq29jdVLjZ6WSyIIJtoBo7YsGT7Ow5vbrsbVrSTRxKC7OrlurpeRCiv%2BUfI3fPP0ZYAAnd5DDbQZHV6yE%2BKKmK744qqBZZMhlUhAJ9%2FIZ8ZTXLU2DC5FiU2zkhEK2IFGIEAs83ouRTQRhZMXqj1RmYsQ1DiNwHfSMmUX7IyFnNAW%2BEonDXEyPENw91A0B4XWBotvNrm44HYxNWX5OWQkWfamjivNpjXJ%2FeXln0yy2d3Y7%2BdLgo5v6kfzSEjtUkbCF9r9FNr7zgxTPR06RTSKzU171bv9q%2FdgN6M3vXfGMTJ8xPUOwGIvDnz2s6C89Yrow1yMxQjBqCCeRnYXx7Rwwe4d6ODfIMKMdtMMKyz0ckGOqUB3%2B7G4NMzn%2FbgLfEK4ROJ%2FeHIFaKNXIPSP5KyGJMmOUgSCW7Jbv8%2Fp9XW6floBzVXfeNPypFmkR6wAsmZVjbnBYMLW6kZHwnz0sKOdWfNiNvq0faKeRA2NaCF%2FQ7mVltkuGrcn8X2ruHANBGKyWH2Z5CcJr3fm31Trwo2h32SjgEyar1ny06MrP5xbV16I5ez%2Bl7SOV9exaB56PFwFhJK1SZ38gA4&X-Amz-Signature=4118f1a9bed6f4c8f6fc62ee953057dfa2341ed1fdd56cd57d8f689dda412505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

