---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLHDRV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ7oQ%2B%2FtmXpPfVBND6X7sxe5KIQItG3ta1AE1xN9wgRQIhAO0bZjrELiV6y7NogZMDGz%2Fo3Dy7NdlG0sIGPIXXXA1LKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnrZaAEI7KupCxG%2BIq3AO452Ywcq%2BbifJpZ9ZgRPw4fK4NTCn4EF7xqnlV519POBKh6pNDcl6qYGYrtqSV6xmMz9tyDysm353%2Ft4GvhJpRhSiB9WHpqOdbno7%2FM0%2FX6%2FTfGlD5Dke7Kmpy5s%2FE1Dq7%2B23hfqYHJSP2SFVcuhjtvu63W11BbktKUx1WjC145qCXW%2FNTCWjGkROMWyOFiozZrLgo7AxxajrZUh7HL3ndyNxcEkYqoT6ZfBMtZvid8%2Fpjdt%2FzrVoBDc7wSrMLCq9pdRQuL4K%2FRK2Mu2wGTzms6d4uRmze1JUP%2F7CpkadZNkcTkukKizHF23F3hNyLFGlaG6CORCKCfXR05YYqYQ9qJknAkUxdR0LwPs%2BXkW5Awb6YOX0CbbKG34BQGNt0%2FO7OlMpUws0Bdjktta2BrpswXonIYL1OjLyNooGiS6N4XTdJ43x%2B6kjpF6H7MidM8QzHmyZ2CXCW9ipbs6%2B%2B86j4mVYBLaevsHcIN1oUKmlnEhIiyomCiWAfzr24SsqWM13D%2FCENI%2BhMcIVC72RZubG%2FwNsUOhrUuOgUl%2F77Vsu7C%2BGqDRIirby1Kg%2FMaRyJVKY21yXn2r29qj292ddgzJysgN2TeyN0eLQbyCvfrorJI7biJfaJ7LrvuGPthDDLs9bJBjqkAXxhYul54dP6POH%2BqGVz48WjLJe8q%2Fn5%2BRSKtt%2BDnsxILWjbUpXgDFJJ31nOLf9LegLn%2Bwhjn55vtHMiPS4ILu4bPGRPIgyJ1c80jk6QIlWLL5vW%2FCXyP%2F%2BnM%2FMe5zCvPCbU8gtwHWpHFHQTEcBNo%2FSKLqM%2FtODO6U0dBhNS1InPwSymjp4kncuZ3ldwymsF%2Fu0NZZqMyurPVC192fygdyFNM8%2BB&X-Amz-Signature=587c518e907284b8f3218a56caf58a8dfdf7601a0239b91350fe895e34befd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLHDRV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ7oQ%2B%2FtmXpPfVBND6X7sxe5KIQItG3ta1AE1xN9wgRQIhAO0bZjrELiV6y7NogZMDGz%2Fo3Dy7NdlG0sIGPIXXXA1LKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnrZaAEI7KupCxG%2BIq3AO452Ywcq%2BbifJpZ9ZgRPw4fK4NTCn4EF7xqnlV519POBKh6pNDcl6qYGYrtqSV6xmMz9tyDysm353%2Ft4GvhJpRhSiB9WHpqOdbno7%2FM0%2FX6%2FTfGlD5Dke7Kmpy5s%2FE1Dq7%2B23hfqYHJSP2SFVcuhjtvu63W11BbktKUx1WjC145qCXW%2FNTCWjGkROMWyOFiozZrLgo7AxxajrZUh7HL3ndyNxcEkYqoT6ZfBMtZvid8%2Fpjdt%2FzrVoBDc7wSrMLCq9pdRQuL4K%2FRK2Mu2wGTzms6d4uRmze1JUP%2F7CpkadZNkcTkukKizHF23F3hNyLFGlaG6CORCKCfXR05YYqYQ9qJknAkUxdR0LwPs%2BXkW5Awb6YOX0CbbKG34BQGNt0%2FO7OlMpUws0Bdjktta2BrpswXonIYL1OjLyNooGiS6N4XTdJ43x%2B6kjpF6H7MidM8QzHmyZ2CXCW9ipbs6%2B%2B86j4mVYBLaevsHcIN1oUKmlnEhIiyomCiWAfzr24SsqWM13D%2FCENI%2BhMcIVC72RZubG%2FwNsUOhrUuOgUl%2F77Vsu7C%2BGqDRIirby1Kg%2FMaRyJVKY21yXn2r29qj292ddgzJysgN2TeyN0eLQbyCvfrorJI7biJfaJ7LrvuGPthDDLs9bJBjqkAXxhYul54dP6POH%2BqGVz48WjLJe8q%2Fn5%2BRSKtt%2BDnsxILWjbUpXgDFJJ31nOLf9LegLn%2Bwhjn55vtHMiPS4ILu4bPGRPIgyJ1c80jk6QIlWLL5vW%2FCXyP%2F%2BnM%2FMe5zCvPCbU8gtwHWpHFHQTEcBNo%2FSKLqM%2FtODO6U0dBhNS1InPwSymjp4kncuZ3ldwymsF%2Fu0NZZqMyurPVC192fygdyFNM8%2BB&X-Amz-Signature=11a8f582a306ceab9ed66fc5b7f9351846b64a2a1b65bf2ac5f6d56998292f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

