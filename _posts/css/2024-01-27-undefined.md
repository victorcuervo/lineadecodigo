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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFMAFZ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCcveCKfWakRMMx8qld1U4HCPnKxTDjXceprBbUzto3qQIhALFx6DlofpJ3wI6XLw%2BHVWu5OEAgmsSWeQTt8dK8OLvFKv8DCC8QABoMNjM3NDIzMTgzODA1Igyg7aVq9MyhdlUQiJMq3AO1tQD6c7ZIsAzjLGkVaAOuTRdkY8JdyTgEf8%2FDIGHCPg%2Ba3aihi%2BOX5tHyfJHTA7N3Xyrld92DGuPHvMAJamhm0g8M2Nwqy%2FdNQSQjZuSMQL%2BMmcCRLEGqME17j6DpRZlG5oTyqyyWW6mEWLSJuKz8SgbiKkLl3taQURMwO5MTzhVGguQObcx2hhPVctULk%2BU7KZ2PH7cvJDtrfs%2F3ZUvPo3iKf%2FyjkUfBT92owc5F0Ds1sS9Hf92aWZJRaTEyTMdWm1VdU82WrYqNLnfXu26E0ASVI5xW2KZI7sHBRvAzTgKMJOBGJXC7bj2YikVkRLaFg1WKMOyo3iR4z7eJAJ9%2BVkDV6Y7f6id9MzU8vgRdVTBw7pjxi9msRhCPeHRgJ4G%2F%2Fz%2Bs7ZaEkSdyYzKUrFjlQf3bmEUDKIOejz3nsZuHc%2BXaoRSKCdG2Ze9TiJe0FPKp1w9dXTEoxSCmkXIRYAkj9wGp7Xk35uy6%2FUJHYdOuF7waR488dPkCYeB2xSuon%2FcTNOt6if1AoH3PPetdQxLNYmnQe6YG3MRk4VrFd%2BaRkHeIiRjgecCehKZFgGYHK%2BtqEDKgHaIE7WXPSX09UvwRyj7e6K9WZDxiwMgKzsjB%2FJ%2BGpKX4EDUdEvrQ%2BjC%2Fh8HJBjqkAQ%2BKr0lN63hmPyhfNKVFaJQG54r7H8XOy5u7nj7aAH8lJC%2FBpgVRPXU39FDyxAPXl3uqOn6C6AyjbpHiX%2FLzPrgUvcXwH543vEsdwqJfrzVwhQl6EFqO%2B4Zuy8ZIIwBeIC1Xa2rgOzAR22EdGQZxnzMrrCtlwDu4Vy5%2FfTtp9d%2FkaERhSuosRzN8MK2zM0uis0EJw6LNFVSjIWCBDVhTsto4ZKyi&X-Amz-Signature=8ad25d4768cd2b8003ab56adec7745c1a0de1f668d4ba3c9b69043610ce5a4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFMAFZ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCcveCKfWakRMMx8qld1U4HCPnKxTDjXceprBbUzto3qQIhALFx6DlofpJ3wI6XLw%2BHVWu5OEAgmsSWeQTt8dK8OLvFKv8DCC8QABoMNjM3NDIzMTgzODA1Igyg7aVq9MyhdlUQiJMq3AO1tQD6c7ZIsAzjLGkVaAOuTRdkY8JdyTgEf8%2FDIGHCPg%2Ba3aihi%2BOX5tHyfJHTA7N3Xyrld92DGuPHvMAJamhm0g8M2Nwqy%2FdNQSQjZuSMQL%2BMmcCRLEGqME17j6DpRZlG5oTyqyyWW6mEWLSJuKz8SgbiKkLl3taQURMwO5MTzhVGguQObcx2hhPVctULk%2BU7KZ2PH7cvJDtrfs%2F3ZUvPo3iKf%2FyjkUfBT92owc5F0Ds1sS9Hf92aWZJRaTEyTMdWm1VdU82WrYqNLnfXu26E0ASVI5xW2KZI7sHBRvAzTgKMJOBGJXC7bj2YikVkRLaFg1WKMOyo3iR4z7eJAJ9%2BVkDV6Y7f6id9MzU8vgRdVTBw7pjxi9msRhCPeHRgJ4G%2F%2Fz%2Bs7ZaEkSdyYzKUrFjlQf3bmEUDKIOejz3nsZuHc%2BXaoRSKCdG2Ze9TiJe0FPKp1w9dXTEoxSCmkXIRYAkj9wGp7Xk35uy6%2FUJHYdOuF7waR488dPkCYeB2xSuon%2FcTNOt6if1AoH3PPetdQxLNYmnQe6YG3MRk4VrFd%2BaRkHeIiRjgecCehKZFgGYHK%2BtqEDKgHaIE7WXPSX09UvwRyj7e6K9WZDxiwMgKzsjB%2FJ%2BGpKX4EDUdEvrQ%2BjC%2Fh8HJBjqkAQ%2BKr0lN63hmPyhfNKVFaJQG54r7H8XOy5u7nj7aAH8lJC%2FBpgVRPXU39FDyxAPXl3uqOn6C6AyjbpHiX%2FLzPrgUvcXwH543vEsdwqJfrzVwhQl6EFqO%2B4Zuy8ZIIwBeIC1Xa2rgOzAR22EdGQZxnzMrrCtlwDu4Vy5%2FfTtp9d%2FkaERhSuosRzN8MK2zM0uis0EJw6LNFVSjIWCBDVhTsto4ZKyi&X-Amz-Signature=8842a273fa351f946ea668cfdc243e9171c652b3e3df6ced93edc0a2d5a3e5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

