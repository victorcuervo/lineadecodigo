---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73LO34C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFm6rac1zGGOmaUQdiGA3RRcgBVP7NR8f3F62Hymp%2F%2BDAiBXejl64MiKS0AXDkVeyUV5YPz6yEexW4AQF65BRNXIaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdgh4JiWq9o8EKNFKtwDpkNmAe%2F1OXsUR2NJUhbJP6RcuWqJI22mIRH6lwpUUyhYAkcA%2BbqDzsBGu0fySNe3nY3K3T7rupLLgdun%2Fw7Wq%2F1cPmz1zsKdw5ExUcyBG1GlgiDwfKOa2VQMdJ12GL1PSreSUkQMM704XFScxpubcrDxfSxJ1EZtQMCsQoYplF66KzeL7uCRipRr5XahcQlOGU%2FADwwgZU0AhCaXsonLnS%2FkpMjGSbVsZWBZ8ocuSENAg1ggee0HMAxFYSTky15IjUwOG8aokafgFtJ7XkJtlqaqa6oYDrkFAa6hxXTC3loPFNyZtKblsvGbzTFb98rPw1F2qk0Rxx70bIG8pASdZktWwt2gr45bt%2FkQOmmZBbGOOupHJPkRqxmg4raqPD7vphBbrlww5FTBBZDZ%2BZyj5WUo8mFWB9FcQm9kp%2FHxBxrfl8fZq1LaVMy2nGHx2D1yNSI53xlJKeSUlh9cdhu3orzkGpawNW8o%2BH%2FUa9hnqz5OPW%2FBAoZWaalRhAkFiJY9bZAhgMojfX1OGL3PFJVJzSAU9%2BPCx5kFOqCIvvN1d5HSB2ipdinors%2BUs1eZrovc9neSUJ3umKrfmojd65sRw7Ic4l639EM%2BXejun%2FIp4jxvPtj7pGa5wa9FMfkw8v3SyQY6pgESmfDIY0nV6XzTe%2F7wYTsWqBwwGtBoR%2B3SozqS%2BSPSm2RCJZghDDrKHTOFqKiucHFPhLhftO6cwqvQnhb1joSCTD41YW0D4KVwY8FTYl4XWHzldvVZ2Y5ZT5XVbG6hakH6R%2B1FuRbHYAabFsD6EDX1s1waCJ1l5dv01A1QtVGOFlpFYGDPGL1vVfl8RL7gwTtaXY20kt5jcaYMzjquSbLdR1Alejh9&X-Amz-Signature=9a9e1e618c782b450fd0ae3b379fa59d0a4bb9fb0f15166b1d725b6258f82d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73LO34C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFm6rac1zGGOmaUQdiGA3RRcgBVP7NR8f3F62Hymp%2F%2BDAiBXejl64MiKS0AXDkVeyUV5YPz6yEexW4AQF65BRNXIaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdgh4JiWq9o8EKNFKtwDpkNmAe%2F1OXsUR2NJUhbJP6RcuWqJI22mIRH6lwpUUyhYAkcA%2BbqDzsBGu0fySNe3nY3K3T7rupLLgdun%2Fw7Wq%2F1cPmz1zsKdw5ExUcyBG1GlgiDwfKOa2VQMdJ12GL1PSreSUkQMM704XFScxpubcrDxfSxJ1EZtQMCsQoYplF66KzeL7uCRipRr5XahcQlOGU%2FADwwgZU0AhCaXsonLnS%2FkpMjGSbVsZWBZ8ocuSENAg1ggee0HMAxFYSTky15IjUwOG8aokafgFtJ7XkJtlqaqa6oYDrkFAa6hxXTC3loPFNyZtKblsvGbzTFb98rPw1F2qk0Rxx70bIG8pASdZktWwt2gr45bt%2FkQOmmZBbGOOupHJPkRqxmg4raqPD7vphBbrlww5FTBBZDZ%2BZyj5WUo8mFWB9FcQm9kp%2FHxBxrfl8fZq1LaVMy2nGHx2D1yNSI53xlJKeSUlh9cdhu3orzkGpawNW8o%2BH%2FUa9hnqz5OPW%2FBAoZWaalRhAkFiJY9bZAhgMojfX1OGL3PFJVJzSAU9%2BPCx5kFOqCIvvN1d5HSB2ipdinors%2BUs1eZrovc9neSUJ3umKrfmojd65sRw7Ic4l639EM%2BXejun%2FIp4jxvPtj7pGa5wa9FMfkw8v3SyQY6pgESmfDIY0nV6XzTe%2F7wYTsWqBwwGtBoR%2B3SozqS%2BSPSm2RCJZghDDrKHTOFqKiucHFPhLhftO6cwqvQnhb1joSCTD41YW0D4KVwY8FTYl4XWHzldvVZ2Y5ZT5XVbG6hakH6R%2B1FuRbHYAabFsD6EDX1s1waCJ1l5dv01A1QtVGOFlpFYGDPGL1vVfl8RL7gwTtaXY20kt5jcaYMzjquSbLdR1Alejh9&X-Amz-Signature=b624b16100c3f1acc0736905c6ac4b8b455d308b40b24ea4c7f4fa0fb59f54a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

