---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZLJULR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5OQDuCGy3xjEGA510GTViR43xHBJc%2FIY7GvqtdghE7AiAbISdc7zwpOKOAno5SDub8wM6fVQoDPJNRVDLboWVDAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzgLX4mVCHoS5jgbIKtwDjzu%2B2DFBaADS4Zjz9mWY5H5iXlq%2BcjCFyo4D46p5IUZyFHQX8bi2qa%2BWkBqZDyxijeJ566lHssPnaJMONsmg1q0Gt9mzuv20LK7TlZ7iIWuXphVoUZGiLnAOhj3ZBM28CVQLHLS4hFiksE9w1xdY296StB1uy7Is5UXNJYTS0eMwcR3EvEMROB0%2BGSo5IvkP9dE3vEyg09rV0GNCsdWqdz1KKhhbKqzCoU1jV9R4md58xvIletbvg6ecDkC2BLW9sKNBTtLvTMLbYgybJi38%2F8wg7MNg0vCA4q0TFOyDBdFYvftLd7YDYFOFk9oVjoV%2BwCVDe2aX%2B13ohwzy2V9IwYwXVrTzWR6jzrMh6rrj72d4iF%2FtaSyvxuRfEVyFNcERk7tDwTv0e%2BcXewMTgYZF%2BfcuJu%2BgvJRZw%2BiF8TyBe0DEe95V33G1zdn6yhtajNXFEGNX%2F9Gu60NJIzgPvvNMDDYeIntLobuGipDZyliCpGyLIs9nPT3HB81lyw77aaXCJfOfFQmFpMJi%2BOkT%2FhOFge5wws0htkZgukQMpe3tQ2Pz6ZLfzAag%2B%2BVFhwwyhsdn2OI1aPptjqOzH9rKQx6kuVA9UNhsOzsuurPFFrTqJwKIXrL1iLdtC0t5ucow4NPKyQY6pgE4aYylncOfOMIbuIpYwnDJpjBGM1peIhDhPW5mzHlgRvW8pEABx%2FjEZmgSlqmQx9UOTKoGTHrJTmyqdrUzNss3LXUano87MTTDw9uw9LQwZedRk5bsVHCqKspTDvVVt7qck0MdtiUM5pO%2FVxzQ4jNIvGOlwMQTFRf6JO94P%2FHzLPEGWWEdwY67RZ0SXirH25%2Fm9zFl%2FpDOYOkzcAat8ysb0%2B%2BRer9i&X-Amz-Signature=186bce85bb3e6aa8a052f8a95761fb2c2b02353101927430814b30df1e313a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZLJULR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5OQDuCGy3xjEGA510GTViR43xHBJc%2FIY7GvqtdghE7AiAbISdc7zwpOKOAno5SDub8wM6fVQoDPJNRVDLboWVDAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzgLX4mVCHoS5jgbIKtwDjzu%2B2DFBaADS4Zjz9mWY5H5iXlq%2BcjCFyo4D46p5IUZyFHQX8bi2qa%2BWkBqZDyxijeJ566lHssPnaJMONsmg1q0Gt9mzuv20LK7TlZ7iIWuXphVoUZGiLnAOhj3ZBM28CVQLHLS4hFiksE9w1xdY296StB1uy7Is5UXNJYTS0eMwcR3EvEMROB0%2BGSo5IvkP9dE3vEyg09rV0GNCsdWqdz1KKhhbKqzCoU1jV9R4md58xvIletbvg6ecDkC2BLW9sKNBTtLvTMLbYgybJi38%2F8wg7MNg0vCA4q0TFOyDBdFYvftLd7YDYFOFk9oVjoV%2BwCVDe2aX%2B13ohwzy2V9IwYwXVrTzWR6jzrMh6rrj72d4iF%2FtaSyvxuRfEVyFNcERk7tDwTv0e%2BcXewMTgYZF%2BfcuJu%2BgvJRZw%2BiF8TyBe0DEe95V33G1zdn6yhtajNXFEGNX%2F9Gu60NJIzgPvvNMDDYeIntLobuGipDZyliCpGyLIs9nPT3HB81lyw77aaXCJfOfFQmFpMJi%2BOkT%2FhOFge5wws0htkZgukQMpe3tQ2Pz6ZLfzAag%2B%2BVFhwwyhsdn2OI1aPptjqOzH9rKQx6kuVA9UNhsOzsuurPFFrTqJwKIXrL1iLdtC0t5ucow4NPKyQY6pgE4aYylncOfOMIbuIpYwnDJpjBGM1peIhDhPW5mzHlgRvW8pEABx%2FjEZmgSlqmQx9UOTKoGTHrJTmyqdrUzNss3LXUano87MTTDw9uw9LQwZedRk5bsVHCqKspTDvVVt7qck0MdtiUM5pO%2FVxzQ4jNIvGOlwMQTFRf6JO94P%2FHzLPEGWWEdwY67RZ0SXirH25%2Fm9zFl%2FpDOYOkzcAat8ysb0%2B%2BRer9i&X-Amz-Signature=3c74c348ba81e7d0bd8e2b2c954ed88a0a9b312867ba418557acc6941f18b463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

