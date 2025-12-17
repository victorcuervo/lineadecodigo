---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK7RG37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnv3RKuI9snrsCI540GrZVBIeCd%2FUsC9MT2I2QtGPGXAiAWmd6A969hOjxuXM%2FzyDwapJjX0vJMZbKy20MdUrKJaSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGd262T9i1eqQnoIKtwDSl7FnLeYYQj1PVcNP%2FP8iHvjtpPMn4i9ej6bZKXEKVzz0mA58zfLHbl3peYiWFKxsQehLuxV6v5Md7CvYFf72LO6przoj3pMoPq7TJ3qcHiC5PIAVhp4NET7otxQeecyFvk7aoIkEwVQuEifALWt5gNMtJSW%2BxRa78k4TUoE9gDOBrzDNFJzBz0Lt50h1%2F%2BbASYbmVVLmUzkg%2B163AhFGCwPOhMnQ6Qxt3tAe3YAU4X%2FuBdokXO6P8G0wwJ4e4l9tjXhc9bcthQLyJt9CZ0sDTogNqyf69C9aR59MWpC%2BuzpJPTC5LeHyfpDDinwBeEaAKxUFbugVSBKaO%2FgrLNmc2PfItoJzXfyeU3zWVaLZlNwQRbFcIPesd428dueHMGlnLwfeg7XQkNoTYBdydJBhbO58RZjf7RKWI7wYmtQFd%2BrbNJW1xpE1j31xPbb7BYYYqbMR6vE8DUZ34bJW32e4vUcuhmYzxn7RKf4JAsDFR5FuHMS81l2iv9G5JIAhlXa%2B5OXsfbQWsySpceBPIZp5XilNvbS%2BhLY8HFlBc6pEMqry5CP%2B%2B%2BOnpXqNS3hPdoB6UNlNVY0iC1kxIyKOal%2FdB4VSIAOguWL%2B9i%2B5jRuI1xczCNEbNffKukHdMgw3%2F%2BKygY6pgEknUD1OJwypU8z6quGlukfOuOtXdRtBh1bAulW4PRG%2Bp9RmYx3iOgfnPvWQCE63%2FQzgdAHEVU%2Byv33tHaYxD6TX6SevZVahLDijEAvpyU3NjEl2UOOw2iTrUuaeNnQDirPUjY11LK0nt%2Bx34DKQSABP2sqQXdtC4zfrYjMsOBPcaA8oG2GjhQ%2FQKME5hW6QUQ7Aq6iW4kjnRN%2BRSzcRlQwpfxGa1SV&X-Amz-Signature=53b6680e5164eb11412fe6dee15bb717d50e679e5d85f2d93d6828e44b509e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK7RG37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnv3RKuI9snrsCI540GrZVBIeCd%2FUsC9MT2I2QtGPGXAiAWmd6A969hOjxuXM%2FzyDwapJjX0vJMZbKy20MdUrKJaSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGd262T9i1eqQnoIKtwDSl7FnLeYYQj1PVcNP%2FP8iHvjtpPMn4i9ej6bZKXEKVzz0mA58zfLHbl3peYiWFKxsQehLuxV6v5Md7CvYFf72LO6przoj3pMoPq7TJ3qcHiC5PIAVhp4NET7otxQeecyFvk7aoIkEwVQuEifALWt5gNMtJSW%2BxRa78k4TUoE9gDOBrzDNFJzBz0Lt50h1%2F%2BbASYbmVVLmUzkg%2B163AhFGCwPOhMnQ6Qxt3tAe3YAU4X%2FuBdokXO6P8G0wwJ4e4l9tjXhc9bcthQLyJt9CZ0sDTogNqyf69C9aR59MWpC%2BuzpJPTC5LeHyfpDDinwBeEaAKxUFbugVSBKaO%2FgrLNmc2PfItoJzXfyeU3zWVaLZlNwQRbFcIPesd428dueHMGlnLwfeg7XQkNoTYBdydJBhbO58RZjf7RKWI7wYmtQFd%2BrbNJW1xpE1j31xPbb7BYYYqbMR6vE8DUZ34bJW32e4vUcuhmYzxn7RKf4JAsDFR5FuHMS81l2iv9G5JIAhlXa%2B5OXsfbQWsySpceBPIZp5XilNvbS%2BhLY8HFlBc6pEMqry5CP%2B%2B%2BOnpXqNS3hPdoB6UNlNVY0iC1kxIyKOal%2FdB4VSIAOguWL%2B9i%2B5jRuI1xczCNEbNffKukHdMgw3%2F%2BKygY6pgEknUD1OJwypU8z6quGlukfOuOtXdRtBh1bAulW4PRG%2Bp9RmYx3iOgfnPvWQCE63%2FQzgdAHEVU%2Byv33tHaYxD6TX6SevZVahLDijEAvpyU3NjEl2UOOw2iTrUuaeNnQDirPUjY11LK0nt%2Bx34DKQSABP2sqQXdtC4zfrYjMsOBPcaA8oG2GjhQ%2FQKME5hW6QUQ7Aq6iW4kjnRN%2BRSzcRlQwpfxGa1SV&X-Amz-Signature=8dec91387f4cf09372f547b2a3f3390510c16a6d045537a4de04df0fce4cab24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

