---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7GJVZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwCMP7JoYEBpQZc3x9QKZdtBDnZlaEA%2FhkgBpfDdM8gAiBuPcjKUl3E%2BCJDIlzNeWjjVWizajqL4tG9hO5hAo81rSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJfmZi2i1LU%2B2v2YtKtwDOB9y4OHutH7htMj5OOlo%2BoxwUH4bzca3MArbdiNr39BGb2CTv1HXfg3%2Fv2pbhXrCg7XD0xsgVW%2BxA7vCWFEXoxGdobOS9W0PdmpvFPUwsA0jSCq%2FARN5UMJarOqSmK2uuGuipCOOxYnH%2F5X%2FEq%2FM7Z3KxXE7YUO9YhphgC8fIKiD8hFebPVFSvRLFTirJb3kL4%2FjWcy9Q9QBcwVK5WtZwNwacGhGPUddiHrZYtA1%2FrQYcgs0zhMhySxhpZuReis9dkDjA35PJVPtp8B6ItdUA7F5f51moNENH9r5r8rQdz%2BdbJEt65ASZnIPr8cjN3XRECLMed3YpXkXgpi%2FSpeSoonSf1wZRKrQc0P27ugG6BmCr5RcdXl952GuQQqIkFdotA85IJ8sxKcudWNw4tE1uRngdHQa3umEKQqM8dduntgfRSJZsUPNUUiERVyXfmxlnPParUf8bwnYtV32kCMpG%2B7%2Fz1hIox33m%2BNEWwk7VzRbOeQq6ggxoYLQmmN%2FxrMymgNJtb7jzlq%2FLvt1ILeJB5qACDivleTQ8%2F2Pukit%2F%2BRc6pL05jGdrxqN7%2B60NRsWUlfxi8%2BevTwdb3NjmAMRPygMsW1YoBVm98d97GufuIYjcRiudkCIzETwLXww2%2B%2FYyQY6pgEBIciOat6ZvYZ7GpmYJ7jw0P3x%2Fv2Di1r6QJPSNv48NRTarXKPzSddB3iVZiswY1iB2uAluquZUYwIABV33fVx1tUIBFYRqPIxx1Hywtw1EW9yJ7IrCcxDVAf6pXYmpzOy%2FbX4rJrjvatvrEziN7Ie%2Fu9wG2UUa6vHXCEAv4sWNsE1of%2BqOTS31gWKHPdSPvJ6OuCgF7pqQLWXpeMxBQ45ubKWsdlV&X-Amz-Signature=1b9fc64aafa1e64a1f1042fba71b12a2a094533b7a73379883b8046304d7023c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7GJVZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwCMP7JoYEBpQZc3x9QKZdtBDnZlaEA%2FhkgBpfDdM8gAiBuPcjKUl3E%2BCJDIlzNeWjjVWizajqL4tG9hO5hAo81rSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJfmZi2i1LU%2B2v2YtKtwDOB9y4OHutH7htMj5OOlo%2BoxwUH4bzca3MArbdiNr39BGb2CTv1HXfg3%2Fv2pbhXrCg7XD0xsgVW%2BxA7vCWFEXoxGdobOS9W0PdmpvFPUwsA0jSCq%2FARN5UMJarOqSmK2uuGuipCOOxYnH%2F5X%2FEq%2FM7Z3KxXE7YUO9YhphgC8fIKiD8hFebPVFSvRLFTirJb3kL4%2FjWcy9Q9QBcwVK5WtZwNwacGhGPUddiHrZYtA1%2FrQYcgs0zhMhySxhpZuReis9dkDjA35PJVPtp8B6ItdUA7F5f51moNENH9r5r8rQdz%2BdbJEt65ASZnIPr8cjN3XRECLMed3YpXkXgpi%2FSpeSoonSf1wZRKrQc0P27ugG6BmCr5RcdXl952GuQQqIkFdotA85IJ8sxKcudWNw4tE1uRngdHQa3umEKQqM8dduntgfRSJZsUPNUUiERVyXfmxlnPParUf8bwnYtV32kCMpG%2B7%2Fz1hIox33m%2BNEWwk7VzRbOeQq6ggxoYLQmmN%2FxrMymgNJtb7jzlq%2FLvt1ILeJB5qACDivleTQ8%2F2Pukit%2F%2BRc6pL05jGdrxqN7%2B60NRsWUlfxi8%2BevTwdb3NjmAMRPygMsW1YoBVm98d97GufuIYjcRiudkCIzETwLXww2%2B%2FYyQY6pgEBIciOat6ZvYZ7GpmYJ7jw0P3x%2Fv2Di1r6QJPSNv48NRTarXKPzSddB3iVZiswY1iB2uAluquZUYwIABV33fVx1tUIBFYRqPIxx1Hywtw1EW9yJ7IrCcxDVAf6pXYmpzOy%2FbX4rJrjvatvrEziN7Ie%2Fu9wG2UUa6vHXCEAv4sWNsE1of%2BqOTS31gWKHPdSPvJ6OuCgF7pqQLWXpeMxBQ45ubKWsdlV&X-Amz-Signature=af2ac47527bce19569c4fec0adb8a97224b106362029e7488667fc33eb7b5d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

