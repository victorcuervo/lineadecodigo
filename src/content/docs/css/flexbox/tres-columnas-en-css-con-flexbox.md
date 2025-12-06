---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYALJ236%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENZFq4pU0F%2FuQUFwvLT1NgSxXX5cCHC3LZ8HmxAlJlAIhANFhXPwzE92ETeqrAHYkA2wbBpnrgSpnI02q6827GoWmKv8DCHoQABoMNjM3NDIzMTgzODA1IgzScOADh3PhT78DTRkq3APhnUHjEiPbHexYoRs10%2BSoblVjcNm0KUrGPrTy%2BVYfqCKr3I12jCEcCmv6kw1PhE0aARU7P%2FYlqDHu1Ky6Oa8MBFS7NtAL46GbSsMu4OzeK%2BLuFRTNQlDu3kyuby4c6vKS63Coj%2FvokbIVi2YwnJsGC%2FD8f0WJppDRQVPXE2BjbCqmVZlHTcNQrdPzmlvxactXNQ66oPqQ0Gc4l8TXnMsTuvEfaIsHa6tzSu99z6eoIRaF1UnSk%2FbtwiwDnASgujOO4dqT8D5BH7lMsE9c8nzALKr0ju9vtWZ9JBpzkHIi1T2kp%2BhS7%2F%2BpwMsM1dWDeaZyX6yeq2tAE5wsJZmVi2VtHwwtqNg6hQzdP4Nlw8mj8voBQZ1WkecI6uKqLU8jj%2BaeVEC4RPuVrOW8VyeUBsaowhgyBphwXi7M8gvj2CkCu2cwcoYESyc70EU1C8qzWpnyHdDaGFtf2weUBc9XpfhzuCpgZ7qRBOLWYH%2Ff9ty74mPtLmEHWm5xtFGpaqngVFIZP%2FJKd0zgguwshg6f%2B1AnXGwIL7Nsn%2Fv5mtHF05k3qF2UZAfQQ5lhCRXOm7UfDvPqWOktozFYEeVzlX67lUnXPl9RLOb4oIsc2GF5amsdu2EL%2FLWcD1dmsDG51TDiw9HJBjqkAYnh68CaHhVX6exrA3SIV5wzHU7Y9rtGEA4NhDI7Y%2BYT9TehnhNSQ4GL0rcv596JYwN6FSz6fBNgB5RijOcckp3Lqc6TnE5m9BzkTsOVyML1ubW6cr3%2F2Y37KnHMn9%2Brk2biIpd9qBQsFwc6oxI48%2FGe2HejTVrE%2FsHFOF6P2H2zz09d6lQGvqIWGVMJk1UDjLz1QR71OaWApEhIM5xysoWo2ckJ&X-Amz-Signature=8350a84e68fbbc9dae1724abc5931db1973a5036a396dcf7e949b706fecc942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYALJ236%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENZFq4pU0F%2FuQUFwvLT1NgSxXX5cCHC3LZ8HmxAlJlAIhANFhXPwzE92ETeqrAHYkA2wbBpnrgSpnI02q6827GoWmKv8DCHoQABoMNjM3NDIzMTgzODA1IgzScOADh3PhT78DTRkq3APhnUHjEiPbHexYoRs10%2BSoblVjcNm0KUrGPrTy%2BVYfqCKr3I12jCEcCmv6kw1PhE0aARU7P%2FYlqDHu1Ky6Oa8MBFS7NtAL46GbSsMu4OzeK%2BLuFRTNQlDu3kyuby4c6vKS63Coj%2FvokbIVi2YwnJsGC%2FD8f0WJppDRQVPXE2BjbCqmVZlHTcNQrdPzmlvxactXNQ66oPqQ0Gc4l8TXnMsTuvEfaIsHa6tzSu99z6eoIRaF1UnSk%2FbtwiwDnASgujOO4dqT8D5BH7lMsE9c8nzALKr0ju9vtWZ9JBpzkHIi1T2kp%2BhS7%2F%2BpwMsM1dWDeaZyX6yeq2tAE5wsJZmVi2VtHwwtqNg6hQzdP4Nlw8mj8voBQZ1WkecI6uKqLU8jj%2BaeVEC4RPuVrOW8VyeUBsaowhgyBphwXi7M8gvj2CkCu2cwcoYESyc70EU1C8qzWpnyHdDaGFtf2weUBc9XpfhzuCpgZ7qRBOLWYH%2Ff9ty74mPtLmEHWm5xtFGpaqngVFIZP%2FJKd0zgguwshg6f%2B1AnXGwIL7Nsn%2Fv5mtHF05k3qF2UZAfQQ5lhCRXOm7UfDvPqWOktozFYEeVzlX67lUnXPl9RLOb4oIsc2GF5amsdu2EL%2FLWcD1dmsDG51TDiw9HJBjqkAYnh68CaHhVX6exrA3SIV5wzHU7Y9rtGEA4NhDI7Y%2BYT9TehnhNSQ4GL0rcv596JYwN6FSz6fBNgB5RijOcckp3Lqc6TnE5m9BzkTsOVyML1ubW6cr3%2F2Y37KnHMn9%2Brk2biIpd9qBQsFwc6oxI48%2FGe2HejTVrE%2FsHFOF6P2H2zz09d6lQGvqIWGVMJk1UDjLz1QR71OaWApEhIM5xysoWo2ckJ&X-Amz-Signature=e505160ea48d1a2ee5709bbe0eb235baf756bb4a403f7edd3c41c0769ab2a7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

