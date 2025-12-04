---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSJRAXI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICip9jZKLIPEieCDdpmdjLsqBg2vNI4gX9XJbfL%2FF%2FWIAiEAi%2BlymECqDlK3eha3tMiiGkLCF98If7h%2FOOBjtvXULjwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDF8wje3BXtz%2BnB1YzircA3V0E1s6r%2FxVT6qJi4DNdQdx4yT76m%2FGRtcU%2FV%2ByztKi0b805CYgZeyN%2BJlRkL%2BHD1kb39Opeldhvis%2BAyjNu87CKXm2XScMQUSFqQ2Wjr8zm8LzuYGAr99FB7PUms63tHz47SR7pkRYfyQUNo9sJDigp7aGDcjRpigsBIQfO0xv76Az352sdI4fo4Xx2IMKfZHEERK9oHztnWL6FRgcjS71dzfuGNwSvw%2B3AaB2ar6HNg2nrfsIP84oxixNc1sH7X3GXsifNjUBHTP5rNkAInWka2lw3bpf3AB7LKumAlOPI%2FMNvSeaxODZydD3%2BCHYbSsIsbq384EA5pfuNxEsS6RVrY1GMwliM4d8qI4HCb2EWCHIvyU%2BOWywSzuo53Nt8afhFgjhyeGUTs2NeE%2FVsgwFTq0966e0CBisz1AFubuBNYYtl8I6qwejKyxqhiX0C0AQAa%2Fti%2F2wNs6x54VXBBh4XXPMRoBiRS5iulXfJNGFzrKkdPVTLsaDFD0Fkey4bP2h%2BpbI36mC315CenfxygDzyPjjjkeWeN1Xaq8X73duzYK0c0Z6dMBgdMQEOOmuU%2Bg7RodCdQuqLbChTqxuQRyZBxY%2BFWf47FABVpD0OWMjLhfSzyO8dh%2FJEhjeMLDnxckGOqUBzWuFGMUzbJKHcluvhdYoQcOqMebiUqxFGjN1ygCyf%2FFqCn67PR91B7NHZvUYaR%2F%2BntASNLGIAsV341HIKSATcLZJSuALRr3eDNWF%2BEBYQLiKrlXfe4ZlPF7l4eHn6XbBsb7Ou3wAhDl0gOuYKef%2FM%2FgXcjVPdI4%2FgjXqrUHZXFIsPjKi388sjbkhAOIiwFipJoXhyLO4k5UmxcJkXJE9IJ9T7MeQ&X-Amz-Signature=9145881b4884e896d6803f0deac2ade93ae604904938221ef3b26ec78ab149e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSJRAXI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICip9jZKLIPEieCDdpmdjLsqBg2vNI4gX9XJbfL%2FF%2FWIAiEAi%2BlymECqDlK3eha3tMiiGkLCF98If7h%2FOOBjtvXULjwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDF8wje3BXtz%2BnB1YzircA3V0E1s6r%2FxVT6qJi4DNdQdx4yT76m%2FGRtcU%2FV%2ByztKi0b805CYgZeyN%2BJlRkL%2BHD1kb39Opeldhvis%2BAyjNu87CKXm2XScMQUSFqQ2Wjr8zm8LzuYGAr99FB7PUms63tHz47SR7pkRYfyQUNo9sJDigp7aGDcjRpigsBIQfO0xv76Az352sdI4fo4Xx2IMKfZHEERK9oHztnWL6FRgcjS71dzfuGNwSvw%2B3AaB2ar6HNg2nrfsIP84oxixNc1sH7X3GXsifNjUBHTP5rNkAInWka2lw3bpf3AB7LKumAlOPI%2FMNvSeaxODZydD3%2BCHYbSsIsbq384EA5pfuNxEsS6RVrY1GMwliM4d8qI4HCb2EWCHIvyU%2BOWywSzuo53Nt8afhFgjhyeGUTs2NeE%2FVsgwFTq0966e0CBisz1AFubuBNYYtl8I6qwejKyxqhiX0C0AQAa%2Fti%2F2wNs6x54VXBBh4XXPMRoBiRS5iulXfJNGFzrKkdPVTLsaDFD0Fkey4bP2h%2BpbI36mC315CenfxygDzyPjjjkeWeN1Xaq8X73duzYK0c0Z6dMBgdMQEOOmuU%2Bg7RodCdQuqLbChTqxuQRyZBxY%2BFWf47FABVpD0OWMjLhfSzyO8dh%2FJEhjeMLDnxckGOqUBzWuFGMUzbJKHcluvhdYoQcOqMebiUqxFGjN1ygCyf%2FFqCn67PR91B7NHZvUYaR%2F%2BntASNLGIAsV341HIKSATcLZJSuALRr3eDNWF%2BEBYQLiKrlXfe4ZlPF7l4eHn6XbBsb7Ou3wAhDl0gOuYKef%2FM%2FgXcjVPdI4%2FgjXqrUHZXFIsPjKi388sjbkhAOIiwFipJoXhyLO4k5UmxcJkXJE9IJ9T7MeQ&X-Amz-Signature=b5f321e3c4141cd991ca192710c60630fd77b37c4d7aabeceaa0b578ca887bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

