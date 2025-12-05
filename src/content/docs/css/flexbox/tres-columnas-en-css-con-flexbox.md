---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZGFOG6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlCiw4U2Vi%2BsuR5GYfQ9F9Lgu9xyLW8%2BzJXVGPe39WXAiEAkmkW3kS050cvfsSjz4hXvmRhST27hLK%2BvRDr%2BiyxKy0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJQeK3rFcsITdYJzGSrcA0MPHKfzLioVGS8Zz63o4ftoxO7zBL%2FcItEOzu2n6l7alA%2B02Hur%2BJWiJQf7r9ttLGkDkTERCXaYV4aM1KXV0HvKZ8Fo27R17j1ZTXzTmD0PwjIfWcej%2BmdP1XMsxKHyC5wgRc9uupRL4XCgC0rDcXD8J4kQ8JZrHnOC6Gb0XHlejrp5lu03zvcokjPPjS%2FYPfRQ%2F3yMi9yP4oLgDOSroFoG7FZBZABkKAnIa%2Fk6Jnd6wl%2F%2FpJY8pfRVxraAVvisfYq3U0RfTHqzOT%2BT6tCT%2B2DpZwbUoV1SAgGXGHroaGETEjP7pusZiO12Cn3%2B6ktH02qmw5DgNm4rerkwsZVKMYwIr8xSPZcSKguyXBEyWuUBmeuG3Bi5MtreuEqJRGeov1ss4i5ldvVjzzKuVstfknLUQt%2BlDNUW8093BVclLa67YAbQg5Q%2B2WuxBe7Cz5cxOuCcWPVKPmbx8213Q537c47M5i4pRH5a%2BeEdcZKVZJRPjh4mAz9apqlqVI%2BMwLNovtMS5gAYP32LNZr%2FRCf2YzqFJT%2FIljEOwJviEzxf47jsSC4DrPhnUp6b8a%2BzvySfWE%2BpdGtiU6rbChRZWAI7MO2hdT8xE0E%2FSEigmvy8X59T2mMCPngVhdVQTln5MLyMyMkGOqUB7aa6C%2FnI1tBuZwgq9DE6mlLhrHdh4cWpsAPfDunCylDbFKQnmL6X6rDJBzZ2cYOMOcXyeewGcnZC255Imc2jwdI6nR%2FfQNaujH521qhQ%2BIsOi%2FytgP1M26NUOhm0Llg7hNLgQ%2Fv6SqSdfFrnMLSSN1oODlrS4UBUWNDXCMXfo4lPm26oyJDBL2FmBXoQHQTTJDD9Je4zARH77ylkFL3ltY1AoHaX&X-Amz-Signature=a9d068a16c0c3ed8cdd232011c3c942ff8b4bbc2aafb7ce1bcd45247e4fd5cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZGFOG6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlCiw4U2Vi%2BsuR5GYfQ9F9Lgu9xyLW8%2BzJXVGPe39WXAiEAkmkW3kS050cvfsSjz4hXvmRhST27hLK%2BvRDr%2BiyxKy0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJQeK3rFcsITdYJzGSrcA0MPHKfzLioVGS8Zz63o4ftoxO7zBL%2FcItEOzu2n6l7alA%2B02Hur%2BJWiJQf7r9ttLGkDkTERCXaYV4aM1KXV0HvKZ8Fo27R17j1ZTXzTmD0PwjIfWcej%2BmdP1XMsxKHyC5wgRc9uupRL4XCgC0rDcXD8J4kQ8JZrHnOC6Gb0XHlejrp5lu03zvcokjPPjS%2FYPfRQ%2F3yMi9yP4oLgDOSroFoG7FZBZABkKAnIa%2Fk6Jnd6wl%2F%2FpJY8pfRVxraAVvisfYq3U0RfTHqzOT%2BT6tCT%2B2DpZwbUoV1SAgGXGHroaGETEjP7pusZiO12Cn3%2B6ktH02qmw5DgNm4rerkwsZVKMYwIr8xSPZcSKguyXBEyWuUBmeuG3Bi5MtreuEqJRGeov1ss4i5ldvVjzzKuVstfknLUQt%2BlDNUW8093BVclLa67YAbQg5Q%2B2WuxBe7Cz5cxOuCcWPVKPmbx8213Q537c47M5i4pRH5a%2BeEdcZKVZJRPjh4mAz9apqlqVI%2BMwLNovtMS5gAYP32LNZr%2FRCf2YzqFJT%2FIljEOwJviEzxf47jsSC4DrPhnUp6b8a%2BzvySfWE%2BpdGtiU6rbChRZWAI7MO2hdT8xE0E%2FSEigmvy8X59T2mMCPngVhdVQTln5MLyMyMkGOqUB7aa6C%2FnI1tBuZwgq9DE6mlLhrHdh4cWpsAPfDunCylDbFKQnmL6X6rDJBzZ2cYOMOcXyeewGcnZC255Imc2jwdI6nR%2FfQNaujH521qhQ%2BIsOi%2FytgP1M26NUOhm0Llg7hNLgQ%2Fv6SqSdfFrnMLSSN1oODlrS4UBUWNDXCMXfo4lPm26oyJDBL2FmBXoQHQTTJDD9Je4zARH77ylkFL3ltY1AoHaX&X-Amz-Signature=3109e6f9d1dd38ce24ed06683ff2c6ceaac2bd421a3fadc3a4bfec9ad38f81d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

