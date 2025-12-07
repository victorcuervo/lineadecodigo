---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPDAE7M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYqyI2tVAOhoZ9vfuGg2l3FFcD8eeBd0W4q3Xxu%2B9rgAiAgk5kLltghRBP3XczR7cqA4oHfUUWLDLJz7i1SY1XtbyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcCNMylib8cC9VJOKtwD4R3H0JUKJpfcucNhc2Xcb11yGaJ0qY5A%2F%2Fw8Gwy6ZaMmCh2%2FOa7UYM4iH8T9ePQ5CMjPwq2qKA7w02BQbb2Q4ms4gzqb9rcsc7DsNobij62IgXLcsw8yNwhSA6v92zmKcvF%2BRAlS2bzgsZwkKcCWHE7rljK0X%2F5HJ8bAjyn8AuXo0j0ZDmHIX18zaqenuzkfsel6PrDQyrtf3Q%2Bzlo87p8KnHLYYEwnr9wwMNAw08t24K6L9UH0QfGfvQjLshFYYo3xQk73iFb%2BaUDtPWyb0UPBH7UXJeTVu%2FNHq80OnuSNMKY8B1hUHRz0vmG2iYl3AAngT8EdxEleCRwew9OuPP77psAZb0QlSFw%2F7wnCUIQ7g7jK41VHaCaZfMJmP9gtb8Kr8KcdoWY9RWkoF%2Fj1QJqVnHdRCjBNmpNeQdYvNfEoNL9AOLdmuIF2WnVWt1fDQnpcbLz138OYpEWXjW8x%2FWRFywq%2BwlXQcyJQBNrlhX2WG34J%2BuAhlsnWx4f44ij85tGQzswYEoVwSxaa0TaBOCQ48djWMtqD%2Fq%2F0OQfoEl7pE3axKOI5JJLbQjbG%2Fcsoj8o7xITQtfgPSAsNz%2FmzeajaU1Xwe%2FZ85%2BakkLd6gu5jZIzCCWLcsr6Z1m3cw%2Fb%2FWyQY6pgGIC7ze8aWutjRfPDFUM7Id3j4FPyRX9kSuxbMfnHm6FSeZZV8YZNp9qsMeZL%2BsUpYEaVsrT1ROztrvJoDfhZ%2B4waH76fL0xeBtCQWrTfQu4TuyR4r%2BlMqtYOzeQ07feCFcEXR8zRwW9Oy0ElsxQJglBd7sAauRl9QzJaqtpb4%2FYZLNlaEOFSIj4gLHeW9DJPr3VGq9vArYaowyingL3QHxTtQdPCDj&X-Amz-Signature=f5bea756d1f3eed66f923d49427d2c2c2c50adf36b41fdc3930da7e3b3a1c09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPDAE7M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYqyI2tVAOhoZ9vfuGg2l3FFcD8eeBd0W4q3Xxu%2B9rgAiAgk5kLltghRBP3XczR7cqA4oHfUUWLDLJz7i1SY1XtbyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcCNMylib8cC9VJOKtwD4R3H0JUKJpfcucNhc2Xcb11yGaJ0qY5A%2F%2Fw8Gwy6ZaMmCh2%2FOa7UYM4iH8T9ePQ5CMjPwq2qKA7w02BQbb2Q4ms4gzqb9rcsc7DsNobij62IgXLcsw8yNwhSA6v92zmKcvF%2BRAlS2bzgsZwkKcCWHE7rljK0X%2F5HJ8bAjyn8AuXo0j0ZDmHIX18zaqenuzkfsel6PrDQyrtf3Q%2Bzlo87p8KnHLYYEwnr9wwMNAw08t24K6L9UH0QfGfvQjLshFYYo3xQk73iFb%2BaUDtPWyb0UPBH7UXJeTVu%2FNHq80OnuSNMKY8B1hUHRz0vmG2iYl3AAngT8EdxEleCRwew9OuPP77psAZb0QlSFw%2F7wnCUIQ7g7jK41VHaCaZfMJmP9gtb8Kr8KcdoWY9RWkoF%2Fj1QJqVnHdRCjBNmpNeQdYvNfEoNL9AOLdmuIF2WnVWt1fDQnpcbLz138OYpEWXjW8x%2FWRFywq%2BwlXQcyJQBNrlhX2WG34J%2BuAhlsnWx4f44ij85tGQzswYEoVwSxaa0TaBOCQ48djWMtqD%2Fq%2F0OQfoEl7pE3axKOI5JJLbQjbG%2Fcsoj8o7xITQtfgPSAsNz%2FmzeajaU1Xwe%2FZ85%2BakkLd6gu5jZIzCCWLcsr6Z1m3cw%2Fb%2FWyQY6pgGIC7ze8aWutjRfPDFUM7Id3j4FPyRX9kSuxbMfnHm6FSeZZV8YZNp9qsMeZL%2BsUpYEaVsrT1ROztrvJoDfhZ%2B4waH76fL0xeBtCQWrTfQu4TuyR4r%2BlMqtYOzeQ07feCFcEXR8zRwW9Oy0ElsxQJglBd7sAauRl9QzJaqtpb4%2FYZLNlaEOFSIj4gLHeW9DJPr3VGq9vArYaowyingL3QHxTtQdPCDj&X-Amz-Signature=df00054a13e5bb37570560528f3ae227459bc933ab16d95504aa692638b1bedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

