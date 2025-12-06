---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62X7MUK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y8zyNut4IgjCNwoR3WpjAu2XxvbVWM7%2B58o%2BicOiUwIgCgDZ5qRflvmJhkxCydWu5SNHalgE0zKtahVVOBrfqsAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMWiolxtrwjaidkxyrcA70tNeUuzFAuQR8ohDYECbly8P06SwQxtPr8SgcUi7Vyxo4X8r4I5xm4HeQ8WIJBqFPavYpSp3eGvL2N5aj2GMLCcZtonXuSRoBaDy8SBOHgURQsGT9L3NDB%2FV8k5slgbPnKa7ueWriqfMjIkxXGtMA4ZPkZLEfuHbPHgN7y5sFeFSu7Fdnq0VLahFlUw92EH5HhkZWj7GogU6WRHo%2B36tCtVpxl3dHz5F1qzUkf15XbdNYVvnQ%2Fxg95g2ZEqOHBJlrbQ55RnUGvHLsQNyOnmfI8z64sVRDXgijfRvCLX9hIM5NcTHwT9YIi9KLzaamC37GOyfbu3y4vtGAwCFCZyA2SJo1JBvNe3nzczVJG%2F1awemFZhEgFnY9X9vImbmKdSi%2FOy%2B%2BZFIdCnHlg%2FQlSuYW8llgx7jUiUT50rQaX0gJgzQuLAzB4g5XRj3kg59d6O2lrKlwYYBmo6Km6Rx%2Biu9C9EZAdEqWinRDxxR9MmtW0xTHMPKrU1ftAO38sYwVDTB0JHhPUaE%2FDlMyXNKY0SR9ahQYG0iUBlrraDyOTeonLmFI%2FMIwAv3eXMbmPY%2B8pnwBFX0jRX29EbdaOR56GKQsKqGBWEQCWhwA3S5jR2NFNYd0FhCPbR%2FXWWcnUMLLH0ckGOqUBcSg8uyX%2FfUcFeOGDCdnmDRG5lOoQ2FQuw3KZdCBuMqL7YKjAxrects%2Bhc1J%2Bc94C%2Fe%2FuKwnrWuTX2ORlE4L8nzCDWxh%2Fjiw7YWfZml4m6Cve2Rvg8sO1X7RnXe93nTeenIR5s05qyiOjsbYFKjyqZ5n35FduVmi7lwo0qt6QrcUWhYmMx%2BXX1tGy84yC9LmVtN3AOFtPW7hYNCs%2FSzP3EahmuULD&X-Amz-Signature=efb210b3abc14aae217c3b58e2c506a87ae36db471eb34ca278f4394e951a063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62X7MUK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y8zyNut4IgjCNwoR3WpjAu2XxvbVWM7%2B58o%2BicOiUwIgCgDZ5qRflvmJhkxCydWu5SNHalgE0zKtahVVOBrfqsAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMWiolxtrwjaidkxyrcA70tNeUuzFAuQR8ohDYECbly8P06SwQxtPr8SgcUi7Vyxo4X8r4I5xm4HeQ8WIJBqFPavYpSp3eGvL2N5aj2GMLCcZtonXuSRoBaDy8SBOHgURQsGT9L3NDB%2FV8k5slgbPnKa7ueWriqfMjIkxXGtMA4ZPkZLEfuHbPHgN7y5sFeFSu7Fdnq0VLahFlUw92EH5HhkZWj7GogU6WRHo%2B36tCtVpxl3dHz5F1qzUkf15XbdNYVvnQ%2Fxg95g2ZEqOHBJlrbQ55RnUGvHLsQNyOnmfI8z64sVRDXgijfRvCLX9hIM5NcTHwT9YIi9KLzaamC37GOyfbu3y4vtGAwCFCZyA2SJo1JBvNe3nzczVJG%2F1awemFZhEgFnY9X9vImbmKdSi%2FOy%2B%2BZFIdCnHlg%2FQlSuYW8llgx7jUiUT50rQaX0gJgzQuLAzB4g5XRj3kg59d6O2lrKlwYYBmo6Km6Rx%2Biu9C9EZAdEqWinRDxxR9MmtW0xTHMPKrU1ftAO38sYwVDTB0JHhPUaE%2FDlMyXNKY0SR9ahQYG0iUBlrraDyOTeonLmFI%2FMIwAv3eXMbmPY%2B8pnwBFX0jRX29EbdaOR56GKQsKqGBWEQCWhwA3S5jR2NFNYd0FhCPbR%2FXWWcnUMLLH0ckGOqUBcSg8uyX%2FfUcFeOGDCdnmDRG5lOoQ2FQuw3KZdCBuMqL7YKjAxrects%2Bhc1J%2Bc94C%2Fe%2FuKwnrWuTX2ORlE4L8nzCDWxh%2Fjiw7YWfZml4m6Cve2Rvg8sO1X7RnXe93nTeenIR5s05qyiOjsbYFKjyqZ5n35FduVmi7lwo0qt6QrcUWhYmMx%2BXX1tGy84yC9LmVtN3AOFtPW7hYNCs%2FSzP3EahmuULD&X-Amz-Signature=2a0cd9b7e197c09f0cd372e5cc92c3a96bc89d3e1858462adc4448f211646ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

