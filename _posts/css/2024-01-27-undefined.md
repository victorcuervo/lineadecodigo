---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATIF2N4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDzlyDEQucWX8770nlCnMlQOSQQRA%2FJ8wVroqqlOhGSLgIhALEdZ7sgwBZ5Pb7khXLn2%2FRu%2FRCsDkujYcpWjwCI5RymKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9gVovayBAiGGoVw0q3AONHWSDghzjc%2BKKESGI%2FQ2yTALMlHvkLCzwu67HEzkhl8obvo765jiN4EHBMgbO4F5j7silRaZhxM50W9jvmoZLg6PLki%2BLZ3FlAfLBOLE0MOswn5VYXe8eYu5uSVBfouVr9JDxH5RnpgEtkiu8jbCSZrWSX4SgRunbbU7tHagtN6aqwB%2FPLzL84rL%2FRFMoovtYiVXbel9xi5kFA4U1QsnoB8Uep7WX%2Fapb%2Fg2TsQ%2FQLOqKRFYEyecwP5LHEkEQg%2FUlZd3lUXOkN%2Fz3C%2BP3jdXNB%2F9dbhtQINvTzS783FrSC13Sh9j4O4NJMnT0PGIZDG6vXBnShqssHjCBEct%2B4Dx8h74DWPziVPmWQ4QjkOF8%2FuesudnZSzabyxnFkmPRDkR1BkLygT3W%2BuNO9ZDLreiAK9GJeu9XZ7U9wgf9p4Dhy5crfwp2PhaidYx24IGytwwr3wqcUxuswFNN%2FkDH4w4HuPJBaFHb4OG4L9xlj%2FVg1jh36ZnWS7AIa5INnuqXtKy%2FyBKWKm8tZNgsfM%2FH0NRCMjTB%2FxtVKg1b3xdd%2BWs3FzHxOPL8dOCf7kf5Vx7mFJvllAhFZPlH1VaqrA%2BoTA8ObdhgivWRjEfx28XdlhLi6DME6KsNWorxMmsD6jC%2BwcHJBjqkAWGo79bFCnIVB405lI5VPNdP%2Bnz2wIbsuq6nKibm1goZHdoHA8TXOHu2Ck6zNVdxG1MaEn4OOthBvFc0Gks4ZMLBYhUoeUL27ymM1RlJ8hj0ZHy5nuaoRxtVswlh8WhBxt%2FFIIvtI8RnyKuLXFULgWEVn8Lfj%2BW9sPi8Ur2HjsccV2wfAyKiVYNSPus056IJX8TbuVwFIU1jfyygPJARZ2xBq6XB&X-Amz-Signature=220d78f8d36f5d45171a8e89aa9cc09e1f41a8b1a4c2b5c7ffe4b1b044915f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATIF2N4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDzlyDEQucWX8770nlCnMlQOSQQRA%2FJ8wVroqqlOhGSLgIhALEdZ7sgwBZ5Pb7khXLn2%2FRu%2FRCsDkujYcpWjwCI5RymKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9gVovayBAiGGoVw0q3AONHWSDghzjc%2BKKESGI%2FQ2yTALMlHvkLCzwu67HEzkhl8obvo765jiN4EHBMgbO4F5j7silRaZhxM50W9jvmoZLg6PLki%2BLZ3FlAfLBOLE0MOswn5VYXe8eYu5uSVBfouVr9JDxH5RnpgEtkiu8jbCSZrWSX4SgRunbbU7tHagtN6aqwB%2FPLzL84rL%2FRFMoovtYiVXbel9xi5kFA4U1QsnoB8Uep7WX%2Fapb%2Fg2TsQ%2FQLOqKRFYEyecwP5LHEkEQg%2FUlZd3lUXOkN%2Fz3C%2BP3jdXNB%2F9dbhtQINvTzS783FrSC13Sh9j4O4NJMnT0PGIZDG6vXBnShqssHjCBEct%2B4Dx8h74DWPziVPmWQ4QjkOF8%2FuesudnZSzabyxnFkmPRDkR1BkLygT3W%2BuNO9ZDLreiAK9GJeu9XZ7U9wgf9p4Dhy5crfwp2PhaidYx24IGytwwr3wqcUxuswFNN%2FkDH4w4HuPJBaFHb4OG4L9xlj%2FVg1jh36ZnWS7AIa5INnuqXtKy%2FyBKWKm8tZNgsfM%2FH0NRCMjTB%2FxtVKg1b3xdd%2BWs3FzHxOPL8dOCf7kf5Vx7mFJvllAhFZPlH1VaqrA%2BoTA8ObdhgivWRjEfx28XdlhLi6DME6KsNWorxMmsD6jC%2BwcHJBjqkAWGo79bFCnIVB405lI5VPNdP%2Bnz2wIbsuq6nKibm1goZHdoHA8TXOHu2Ck6zNVdxG1MaEn4OOthBvFc0Gks4ZMLBYhUoeUL27ymM1RlJ8hj0ZHy5nuaoRxtVswlh8WhBxt%2FFIIvtI8RnyKuLXFULgWEVn8Lfj%2BW9sPi8Ur2HjsccV2wfAyKiVYNSPus056IJX8TbuVwFIU1jfyygPJARZ2xBq6XB&X-Amz-Signature=d0730302f979ee568428223378fcbbf639a7cecd842666d0839263f741e802e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

