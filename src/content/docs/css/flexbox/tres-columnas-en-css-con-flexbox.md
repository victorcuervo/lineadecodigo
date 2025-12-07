---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RETUGQD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F5Bu6s4QEhzpbW5CVo3u1q7Gzgpxw91ZO13PPRKdEUwIhANkOGfG6pEY9WMllwVjH7dFlQSW0WKtDDVqX7iHyu5vaKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKeyHEuCArWMDz0uIq3ANXZ7sozRUxqj91exrtZEZszjp1Vd6kFq8i%2BtFWfRKWjRXw%2BZEqxB2J6lfnCcWiT239AIVhPpvCIrMlnyi4sazO5%2BB%2FQbSmuIRA9dmZgy4jhYt04x3mZ3SO3VrCGyx7F8jd5kd%2FZjWD6f7rU2esYaz1RI3BlLiJ3ypFRqaexFk3tUzK79dR%2FB9SvOLs3HFEctYkAQJh%2BoNS6kW0r5QQ9KZe3bDWVP1QtHeQw%2FLPG2KXpdQrICtlHG1y%2B0pHR%2BiIe0b6bYS%2FlAP6B25oHcDaI42YWmBZFHbBDfBVuODimSBxk2pYEn07JGJXFwY8JzNRieUJFUyYO4RgK8oT%2FlI8e0scELWi3Zz8K%2BpeNPcYl4K%2B2X%2FkHdSWD%2Fj98JXXVk3LCbBTl%2B%2FYkv6d2rW%2B8BmCN2OqSr12nN3zADClmVFiszS8OkyEws9uZxlmxLrRWWWaizP2Y8LMUAmLpMtmlvM6kHc7DkamkED6BJ9L33gO%2BmpwnKUwsoGd0%2B0kwQBwMbQuF9s8XL29dyEBIg9517N7C7PozQfPmkwfYXNc9jsM5WUcQIHWXjYe1pJz0bjd24ykaavwN4n9Txa2OtjlxOeoFtke1DkBLDt7UrKB4F%2B7%2Bzjx3aUDFgbkRAkU%2FxjdfzClotTJBjqkAXl3HXjC0sVI%2F6x3j3WQ0cnk3ORp9ySNd3%2BB72IF3bx1phh7x%2BKkbI87vneYsckTTfesVuzPHdzNATTMLRVv9C%2FetV60ElLv5DBlrE1ofb0cisR3HsTHUKsd58lWWXVvfB4g9byLJn%2Ba3qM%2B23HEZwu09k9aCmPKRlvTat9oY738bQ81NKmXWjf%2BGZib45diUMG8L2rgKd037QBYF1nWHsfJVYIc&X-Amz-Signature=96f6c7e5944f8aaf352c11fac0fa873a5ab4fc2b5f4c58163cc5980dc2bfba94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RETUGQD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F5Bu6s4QEhzpbW5CVo3u1q7Gzgpxw91ZO13PPRKdEUwIhANkOGfG6pEY9WMllwVjH7dFlQSW0WKtDDVqX7iHyu5vaKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKeyHEuCArWMDz0uIq3ANXZ7sozRUxqj91exrtZEZszjp1Vd6kFq8i%2BtFWfRKWjRXw%2BZEqxB2J6lfnCcWiT239AIVhPpvCIrMlnyi4sazO5%2BB%2FQbSmuIRA9dmZgy4jhYt04x3mZ3SO3VrCGyx7F8jd5kd%2FZjWD6f7rU2esYaz1RI3BlLiJ3ypFRqaexFk3tUzK79dR%2FB9SvOLs3HFEctYkAQJh%2BoNS6kW0r5QQ9KZe3bDWVP1QtHeQw%2FLPG2KXpdQrICtlHG1y%2B0pHR%2BiIe0b6bYS%2FlAP6B25oHcDaI42YWmBZFHbBDfBVuODimSBxk2pYEn07JGJXFwY8JzNRieUJFUyYO4RgK8oT%2FlI8e0scELWi3Zz8K%2BpeNPcYl4K%2B2X%2FkHdSWD%2Fj98JXXVk3LCbBTl%2B%2FYkv6d2rW%2B8BmCN2OqSr12nN3zADClmVFiszS8OkyEws9uZxlmxLrRWWWaizP2Y8LMUAmLpMtmlvM6kHc7DkamkED6BJ9L33gO%2BmpwnKUwsoGd0%2B0kwQBwMbQuF9s8XL29dyEBIg9517N7C7PozQfPmkwfYXNc9jsM5WUcQIHWXjYe1pJz0bjd24ykaavwN4n9Txa2OtjlxOeoFtke1DkBLDt7UrKB4F%2B7%2Bzjx3aUDFgbkRAkU%2FxjdfzClotTJBjqkAXl3HXjC0sVI%2F6x3j3WQ0cnk3ORp9ySNd3%2BB72IF3bx1phh7x%2BKkbI87vneYsckTTfesVuzPHdzNATTMLRVv9C%2FetV60ElLv5DBlrE1ofb0cisR3HsTHUKsd58lWWXVvfB4g9byLJn%2Ba3qM%2B23HEZwu09k9aCmPKRlvTat9oY738bQ81NKmXWjf%2BGZib45diUMG8L2rgKd037QBYF1nWHsfJVYIc&X-Amz-Signature=28986b783c6f289bdcc35f798b48c8b9d4aa8b456fd40feaa4e4fd6727f71266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

