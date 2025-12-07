---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG4ZNO5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpU%2FVPzliye6HwmjEchMZyPIXWFyKptlRZ3anRznSXvAIgF2Jh2pYxMNftwCPusUY31eWS%2BBZzfGSScWr60PEJyIwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmlqk3ZRcFfif%2FkkircA3szZpGY83u6bjdNj5dT41yP0PFeGFBC6z3eAUhrT6dbK%2F9m9n2%2Bj%2Fys%2FbaQNP54xedWtuqZb3CXY80C%2BdixkWtK7PUChGjgqV7Lk1pYS%2BjWKX06mO20kyTIK2zZyICWuK96gy0fbgGL06mMFMWKZyQzCZDBaoWK64AE2GLdBP515kmiKcNd2FO%2FXfKlkXQTOydg871R%2BsMMJ4RsYJvNmFESxSXs9yfe7x7Pl8bbvGKiEGLzh6RnShaPJmrQWakUcLkdqgKaNtz%2B5hXPUWS16sm9suSBe4zNIKxatwFySTYBmMwzn%2FekNL7JCX0j4HkYU5t4qqDqV%2Bo0fGdcBHqfow6rSt1PYPX%2F%2B8i5IrBkcW3VqHN%2BCR3Nm8uJy%2FXwaLB7e4rlHQqWD%2B2HBGhHFBfgnt09ZovaNB76ukHNlnaZZqtnIiJdKF5SVriOFVuBLLXT%2BzHmSN4znpM19gTJGNb5tGyX3%2FQrpYupY8bRWWT3L7VM8PqHMh3mM1Fce5WZUfTa7yt%2BfJEYUxo%2BJEu1%2FulDtzCT%2F2kfxxsX212gdXCXcZ28rzG7XXU6c6%2FEwe%2BhhsoBVatCRvw7hQcvcnLx4IhhhlgxVvgXzOYQrWBtvfs2FkWfXNn7kor8SWGJsiGFMLi51skGOqUBL7mVL%2FiZXIkIMZTYqG5YQCDbxF%2FtQ12T1xci9ozbtcLE5VeO5uUDD0av8SYjDu%2FkKSh7sKYVXA17rlMQiM7pa1ysCZkgpWI0pnLzdyC1sgwpLB6dFiVkfgi%2FSPUS5h2gf5gCnpSk8OV6DmCXayVwT1VuGWZJvIIDTJ2S%2FZW6awG%2BjpOu98yIpoAaDTfI%2Fqr0ZlMC%2F5yNFxKsmRdnB7kpFzmSekEt&X-Amz-Signature=f348137b7dafb5a03f02959a8f8a127fbb1e226d899bb120879c63860252bfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG4ZNO5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpU%2FVPzliye6HwmjEchMZyPIXWFyKptlRZ3anRznSXvAIgF2Jh2pYxMNftwCPusUY31eWS%2BBZzfGSScWr60PEJyIwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmlqk3ZRcFfif%2FkkircA3szZpGY83u6bjdNj5dT41yP0PFeGFBC6z3eAUhrT6dbK%2F9m9n2%2Bj%2Fys%2FbaQNP54xedWtuqZb3CXY80C%2BdixkWtK7PUChGjgqV7Lk1pYS%2BjWKX06mO20kyTIK2zZyICWuK96gy0fbgGL06mMFMWKZyQzCZDBaoWK64AE2GLdBP515kmiKcNd2FO%2FXfKlkXQTOydg871R%2BsMMJ4RsYJvNmFESxSXs9yfe7x7Pl8bbvGKiEGLzh6RnShaPJmrQWakUcLkdqgKaNtz%2B5hXPUWS16sm9suSBe4zNIKxatwFySTYBmMwzn%2FekNL7JCX0j4HkYU5t4qqDqV%2Bo0fGdcBHqfow6rSt1PYPX%2F%2B8i5IrBkcW3VqHN%2BCR3Nm8uJy%2FXwaLB7e4rlHQqWD%2B2HBGhHFBfgnt09ZovaNB76ukHNlnaZZqtnIiJdKF5SVriOFVuBLLXT%2BzHmSN4znpM19gTJGNb5tGyX3%2FQrpYupY8bRWWT3L7VM8PqHMh3mM1Fce5WZUfTa7yt%2BfJEYUxo%2BJEu1%2FulDtzCT%2F2kfxxsX212gdXCXcZ28rzG7XXU6c6%2FEwe%2BhhsoBVatCRvw7hQcvcnLx4IhhhlgxVvgXzOYQrWBtvfs2FkWfXNn7kor8SWGJsiGFMLi51skGOqUBL7mVL%2FiZXIkIMZTYqG5YQCDbxF%2FtQ12T1xci9ozbtcLE5VeO5uUDD0av8SYjDu%2FkKSh7sKYVXA17rlMQiM7pa1ysCZkgpWI0pnLzdyC1sgwpLB6dFiVkfgi%2FSPUS5h2gf5gCnpSk8OV6DmCXayVwT1VuGWZJvIIDTJ2S%2FZW6awG%2BjpOu98yIpoAaDTfI%2Fqr0ZlMC%2F5yNFxKsmRdnB7kpFzmSekEt&X-Amz-Signature=e5b5ff7f7e5ed5ff18f3dda9abf03b280c143a26c5236f47ea3a6fa4311182e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

