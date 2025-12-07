---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OEQU25%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3iVTBb37jkx5h1NzKfHztEnfuq%2BhfhLfxOu9NJXlapAiA5ncOHJdNrShRkmVBgElHmT8BlBUDhdzsCNIdr%2BeUE5iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfojdZpvWojj9LZqKtwDFGItoR%2Bib%2FAg3nl9%2FMCzXrGdNgPbDw1rfIJ3MB90DJpWeTci0skzDQqUD%2FAVuvrRZqOsxDsiUi03GYTgpZD9%2BHwQYtiyP%2FAUU7xitS%2FT4WWO0mev4xWjmLY9MJkARR7IwkrgYtXT5WxYSp6pVFXFXX5KYLidOSXHSvw1luXENjE2ZyggQWJyZXmtO8BaazI4JoA4qbz4q942VHwaQxpjeDVO7S9710srWP%2BGxmf8oqDN3NOgfIKG1vdKFi2s5ZxVOV69gJIKEPkpyU8MkjG10uUFSeoEaCBBSd5QQT05sZ%2BZpH2h0snx%2FmBCavkI2tfnN4e6jaeYdZVzlTI72wAS7WJaf9dSH1xlSL6j%2FPfgsQLN3yQRvsPiCQs4%2BpveSKHhuiJPP1ikZytpfc07FvAvrh%2BzzFLguJyjPEzPgL%2BWbN3OCN95rUJTrJt7AUYTfAY6IX6cXPO2JgQdWfkHLoBRATbI8E%2BZp7ymwVPUR3Rgvh1p4bc6BYq8jhp4GqDD39VqFSuiCU8EfL53dF2TVBLB%2Bs9YiaE1HOdK74l4r%2FDaWGcFUdGIY%2FWjr3lu6n7loJdbNZCrye29Fnkwm%2BX%2BL9v4zhoj%2Fr5zK57s1Mq%2FxDNI5W7bvFpKQu1qdh%2BCwF8wz5rUyQY6pgHQY4Mj7uwKVigHIOXW6iSlg%2BSCfJ3f%2BzXwzTiX0eoJiS%2FWHKiKBZOBeeWutxP3%2F3EI1JwCSGEI6ulrDVJeue6HcOVNSTQIHaySjMiOuy6zcCceQOl3coP%2BpYjSfd6K9DJaf8cnNV35ny8IHfPePv6ns54OxAnz5kizmIR52%2FrGhsQpRTvkY2z%2Fq1tQ%2Bb1ES109V8ylPdWfb1%2BoAuBsfv5Ga%2FUPI%2FQC&X-Amz-Signature=f00130c23363b34ad93f5c85c4f08bca0aca8eb43bf2c4f2ca5ee86ce3b9f7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OEQU25%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3iVTBb37jkx5h1NzKfHztEnfuq%2BhfhLfxOu9NJXlapAiA5ncOHJdNrShRkmVBgElHmT8BlBUDhdzsCNIdr%2BeUE5iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfojdZpvWojj9LZqKtwDFGItoR%2Bib%2FAg3nl9%2FMCzXrGdNgPbDw1rfIJ3MB90DJpWeTci0skzDQqUD%2FAVuvrRZqOsxDsiUi03GYTgpZD9%2BHwQYtiyP%2FAUU7xitS%2FT4WWO0mev4xWjmLY9MJkARR7IwkrgYtXT5WxYSp6pVFXFXX5KYLidOSXHSvw1luXENjE2ZyggQWJyZXmtO8BaazI4JoA4qbz4q942VHwaQxpjeDVO7S9710srWP%2BGxmf8oqDN3NOgfIKG1vdKFi2s5ZxVOV69gJIKEPkpyU8MkjG10uUFSeoEaCBBSd5QQT05sZ%2BZpH2h0snx%2FmBCavkI2tfnN4e6jaeYdZVzlTI72wAS7WJaf9dSH1xlSL6j%2FPfgsQLN3yQRvsPiCQs4%2BpveSKHhuiJPP1ikZytpfc07FvAvrh%2BzzFLguJyjPEzPgL%2BWbN3OCN95rUJTrJt7AUYTfAY6IX6cXPO2JgQdWfkHLoBRATbI8E%2BZp7ymwVPUR3Rgvh1p4bc6BYq8jhp4GqDD39VqFSuiCU8EfL53dF2TVBLB%2Bs9YiaE1HOdK74l4r%2FDaWGcFUdGIY%2FWjr3lu6n7loJdbNZCrye29Fnkwm%2BX%2BL9v4zhoj%2Fr5zK57s1Mq%2FxDNI5W7bvFpKQu1qdh%2BCwF8wz5rUyQY6pgHQY4Mj7uwKVigHIOXW6iSlg%2BSCfJ3f%2BzXwzTiX0eoJiS%2FWHKiKBZOBeeWutxP3%2F3EI1JwCSGEI6ulrDVJeue6HcOVNSTQIHaySjMiOuy6zcCceQOl3coP%2BpYjSfd6K9DJaf8cnNV35ny8IHfPePv6ns54OxAnz5kizmIR52%2FrGhsQpRTvkY2z%2Fq1tQ%2Bb1ES109V8ylPdWfb1%2BoAuBsfv5Ga%2FUPI%2FQC&X-Amz-Signature=eabd8bff4beb4072fcc5442ba5e92e70c5819f37e9b1e668acfea865fdc8c8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

