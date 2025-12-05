---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHB4OQDR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzTFhfegRkC%2BMKnb9l9kdg0VTUiYsZ%2F4D%2Fxja2JHO0qQIhAN8CWInIJ7iCocX8WC7YjDTNtmSyJQUmkXgq%2FEUGuTSNKv8DCGYQABoMNjM3NDIzMTgzODA1IgycLGRXNX9swjR4oucq3AOUC4jJUmPV%2BmJa%2Fg7tapKLefL2VOwCEWGiNRKvVXfzehnXZLzS8S3LM7UPYMJghJNrTLz1iSbc%2BtwGgK8e5MVublfXeUnamk9mx3UuM8zpTmTESrqTTVV3nNXlAHfL0uAhxtWonzn5vQNPa5gOXZr%2F0bBNPU0rhj5brI8puzmNabTkZSvD23CMEHx%2FTOqy5E%2BipViiO7TrJ437ZgV87JFfcdTwvN3%2FIAtuwhX8GSZN6CEF%2FmONw%2FFPrLdkt235%2FGMhhaG8DtCjYS1Anncpx4TPROw0eASklbbvtKGBXxqB9nVJLL7HMh4XaOMWmf%2BR%2BVdnKbRdAPEm4UI9YQwFK8eMU%2BhosytHg%2FESw6fKnQonSxyxxMVdPWoAFXkD2jejGia5mT%2B3b4zYcu%2BcIyegd7ODNSSUp%2BDVrfTVOiB2iJQfYtzTTpdZM40ADGOJ3%2FvKZzeg9cPeZWcH88Ezn1Nd%2Bsy0c5Aeb1MnB%2Bz57LPAjAk3FzZaW6lLT0WRghz1KMbp%2FsP3l9Ab5rT0Fxn7%2BvljAO1gfCmMi1ZjLeBEbgJPz%2BrSToBoT7uQeFyAOHAmDPtpVY%2Bp8rglWk2UODIJAjJgfXFjfs8nFEpXrc1aTngJq7KsOzcWasn1lTir6rHBlzDpgM3JBjqkAQvPxmyTexVycpeYlIWnxMLjHsggKmI1PRtMImu%2FpUXA%2B9dsj9QcoW%2FSVt9Q5ZqmvaJehTJXebHmhfzxbd6p0ouUcjSb8wb03XWEcFP%2Fnx%2Fd9POqF5R4HGBAPFEdBoV5U6xWmbtf8JdfpH7dH44MWo1hZ3zPUf9w7jEi%2FhqkImHrHDRBTKCH%2B1HrWU7iQw3Sj0pw7PT4McqhhBfjO%2BIpWTyfcAEs&X-Amz-Signature=cbdd35bf9495d0f9f1528d9b992a15674417cebf86e5a8dfc07081c75c929866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHB4OQDR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzTFhfegRkC%2BMKnb9l9kdg0VTUiYsZ%2F4D%2Fxja2JHO0qQIhAN8CWInIJ7iCocX8WC7YjDTNtmSyJQUmkXgq%2FEUGuTSNKv8DCGYQABoMNjM3NDIzMTgzODA1IgycLGRXNX9swjR4oucq3AOUC4jJUmPV%2BmJa%2Fg7tapKLefL2VOwCEWGiNRKvVXfzehnXZLzS8S3LM7UPYMJghJNrTLz1iSbc%2BtwGgK8e5MVublfXeUnamk9mx3UuM8zpTmTESrqTTVV3nNXlAHfL0uAhxtWonzn5vQNPa5gOXZr%2F0bBNPU0rhj5brI8puzmNabTkZSvD23CMEHx%2FTOqy5E%2BipViiO7TrJ437ZgV87JFfcdTwvN3%2FIAtuwhX8GSZN6CEF%2FmONw%2FFPrLdkt235%2FGMhhaG8DtCjYS1Anncpx4TPROw0eASklbbvtKGBXxqB9nVJLL7HMh4XaOMWmf%2BR%2BVdnKbRdAPEm4UI9YQwFK8eMU%2BhosytHg%2FESw6fKnQonSxyxxMVdPWoAFXkD2jejGia5mT%2B3b4zYcu%2BcIyegd7ODNSSUp%2BDVrfTVOiB2iJQfYtzTTpdZM40ADGOJ3%2FvKZzeg9cPeZWcH88Ezn1Nd%2Bsy0c5Aeb1MnB%2Bz57LPAjAk3FzZaW6lLT0WRghz1KMbp%2FsP3l9Ab5rT0Fxn7%2BvljAO1gfCmMi1ZjLeBEbgJPz%2BrSToBoT7uQeFyAOHAmDPtpVY%2Bp8rglWk2UODIJAjJgfXFjfs8nFEpXrc1aTngJq7KsOzcWasn1lTir6rHBlzDpgM3JBjqkAQvPxmyTexVycpeYlIWnxMLjHsggKmI1PRtMImu%2FpUXA%2B9dsj9QcoW%2FSVt9Q5ZqmvaJehTJXebHmhfzxbd6p0ouUcjSb8wb03XWEcFP%2Fnx%2Fd9POqF5R4HGBAPFEdBoV5U6xWmbtf8JdfpH7dH44MWo1hZ3zPUf9w7jEi%2FhqkImHrHDRBTKCH%2B1HrWU7iQw3Sj0pw7PT4McqhhBfjO%2BIpWTyfcAEs&X-Amz-Signature=e864e604b01caa6529c9f44a9f7dc7ae412188f6f170f7f185fb60ebfbe8d01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

