---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSQ6OZF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYWuPkFO9rC9Y77yma0VgmcH8CQmOSkp3CwA49wB0JkwIgTiDlYFMWJ%2BCU1ylpW2ihOlM1FIW6j41VG%2BXW7FZhx6oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2VaPsl53mIpg5T4yrcA%2FGVYGR7LU12eEjVPSLkJabhs%2FOdHOICnUwB%2Bt9hU2f5Hs8kFJqLCHVMj5AP4IICfYsdTk1ZjB%2FbFdCTAH2fWkLA%2FpjIijf5yQCBtzy%2B5hc3Bw5cHBwktFrJYHnGC50kp3R4aCt2Radfzk2MceqybM41IvQRWeA8vFBeyOaXNhGgw6zzcfGx2hMzLM3L6RFKjb0NxL%2FXkRXlX2LVn0enwqrcpggzHGfokAXvTAmdLKJeU7yfmXUpFAi87Pz20%2BFv%2FiF9NzpIlAbDWN8soIqN1jsy6%2BZHPKQIGnV1WkAr9459YLi2xseCTvK51miq3jPhqB8tEXJBRUvAsrI%2F7zII5RxhAKxYnXzqbXdvkCRENW9YtRBovdhwo3zc%2Bu%2FUFgvwGsJo9XNVhQzVSdyvExP7Q18KxvfnAKLSsy%2BZLW77sTd%2Be%2FmYDbEDoX0PvK6mKk14n6J2bhF2Jv6tPrPMOEc5d%2F%2FC4gh%2Fc1wWc3L0iPfcaXBqufZAOY2X6Pimn2%2B1fmovPQ5bu4YgoUuHq%2FgWsdD1Wjgv0RzfOktlV70st%2BeY94I%2B9tkaimbCWbmOlr3dAHp9MKfsllaeEHVEu%2BaDswig%2BgKLDNfjg2pijvTiL%2FEFlP%2B%2BbgaLR5bQUjzy4uRHML%2BZ1ckGOqUB8w%2BJ95hYoBdbg6BWo2%2FhQmTAh6ocRmstvmOoigDwAX1AFTtCI4AZnvT8Ct33w8adLiXU9RCWUvb2JwKwnidx3PUGSjOY7KlK%2FlFQW4c7IDTwnUPbjmtOGnynmoTPKPdA%2F%2BAetfpx%2B5Tap0t3TwXkfKc3KgyILnFloau2KkHz3RO5guZuKgQj4ROyTDC03zNWiEWYJ2CZakVE3L4C2OiU3zjF2zZG&X-Amz-Signature=c7ed4574e549b385bb528123456c4c39c290e3df403b811713db65b64eded522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSQ6OZF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYWuPkFO9rC9Y77yma0VgmcH8CQmOSkp3CwA49wB0JkwIgTiDlYFMWJ%2BCU1ylpW2ihOlM1FIW6j41VG%2BXW7FZhx6oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2VaPsl53mIpg5T4yrcA%2FGVYGR7LU12eEjVPSLkJabhs%2FOdHOICnUwB%2Bt9hU2f5Hs8kFJqLCHVMj5AP4IICfYsdTk1ZjB%2FbFdCTAH2fWkLA%2FpjIijf5yQCBtzy%2B5hc3Bw5cHBwktFrJYHnGC50kp3R4aCt2Radfzk2MceqybM41IvQRWeA8vFBeyOaXNhGgw6zzcfGx2hMzLM3L6RFKjb0NxL%2FXkRXlX2LVn0enwqrcpggzHGfokAXvTAmdLKJeU7yfmXUpFAi87Pz20%2BFv%2FiF9NzpIlAbDWN8soIqN1jsy6%2BZHPKQIGnV1WkAr9459YLi2xseCTvK51miq3jPhqB8tEXJBRUvAsrI%2F7zII5RxhAKxYnXzqbXdvkCRENW9YtRBovdhwo3zc%2Bu%2FUFgvwGsJo9XNVhQzVSdyvExP7Q18KxvfnAKLSsy%2BZLW77sTd%2Be%2FmYDbEDoX0PvK6mKk14n6J2bhF2Jv6tPrPMOEc5d%2F%2FC4gh%2Fc1wWc3L0iPfcaXBqufZAOY2X6Pimn2%2B1fmovPQ5bu4YgoUuHq%2FgWsdD1Wjgv0RzfOktlV70st%2BeY94I%2B9tkaimbCWbmOlr3dAHp9MKfsllaeEHVEu%2BaDswig%2BgKLDNfjg2pijvTiL%2FEFlP%2B%2BbgaLR5bQUjzy4uRHML%2BZ1ckGOqUB8w%2BJ95hYoBdbg6BWo2%2FhQmTAh6ocRmstvmOoigDwAX1AFTtCI4AZnvT8Ct33w8adLiXU9RCWUvb2JwKwnidx3PUGSjOY7KlK%2FlFQW4c7IDTwnUPbjmtOGnynmoTPKPdA%2F%2BAetfpx%2B5Tap0t3TwXkfKc3KgyILnFloau2KkHz3RO5guZuKgQj4ROyTDC03zNWiEWYJ2CZakVE3L4C2OiU3zjF2zZG&X-Amz-Signature=a6857c7ccc1986fa7cc1f23655987d5365557a2724146c4a05d5476618683cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

