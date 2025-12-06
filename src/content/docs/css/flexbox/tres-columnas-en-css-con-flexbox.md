---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPTCDGS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu2iLD3dv6ADUxGV6l3WnEyl1tLqMECjZ1B%2F2YS7oGbAiAHCwlDdC2zEhFE9YTC7BW2o98r22qRg9vLdqan14SERCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6OX4q0VzF3lyQ77UKtwDrNLQ3CW8b%2Fwti%2FIdclkvG4XhA9557uRAc5uoxBdH%2FGYYFr9cKpArJmiGF9KsbAYp8c%2BMTCaae2MMWzrnBTYBJRssUTQJhT1joiGlNye6xH7aSjtbsjA0c12m2QeN4RELN8DzJTCGTtu6juYI6tCy0F3rckrPXbjkqTFYqWkz2CAgrDtxo994tCA1bPUPU9Ob%2F3NlvSxNAvKPiYx5HtistoCVZ0cFe%2FImmpRn32NzabIEa29inRUH3x62iqByDGDv8FKy3vlo%2BVjFEtNLAsB68Yu2sZ30nYZZ06oVb%2BFuqZQLYh%2BBOTbi0IQ%2BB1Kwnqey6dI3XVFrGRM%2FUekI6zmW48bSa7DZQOcuJipO8zfts688HYFiRJJPLGbBMOB0SAYDQpcLkfWrna19lYTQqOurjGzZ%2BNF2E4d7HtkF2uVUhk7wCQ%2BbNaPQ0gxiT7QE1ApuNy%2FNKKDA3ApJBcn1pqiScc03nfZ6cHt9KffLDIMqFifVX%2Bj%2B4AGJk9Gxr1Q0XSuYnGzdGmRDMwQSeY%2FYt25myqj9eEUmotpJ3PZ7pv4HRtuWmrwDknGSUXS%2FD0XgIJYjHnx0JP3zJGFZG%2F%2F%2BIczRPXXwe%2FwPY5vAVa09nQIn%2Byg2fqRIWJXRvfis43cw8dPSyQY6pgHejsI916RG%2B5M4ARnQr9NFaZieMFrU4oIGQnr4LCqjcVqSyUDPeohgsldnJl0W4rh6rzEaYPez74Gg4bz%2FiS0sA7Mhct7DB5d5oJ1f03LvfR3Ihk6oCzUK2PezhjBa7VY%2BKs2a%2BLFTFJXPVHWUNvjTMPGcgtZyWNkyRi%2FgyNIThoHub%2BeQOHwpZm5em8UoDBG%2BTdLaungLsTxX0XFYAdVRmrJWIEg0&X-Amz-Signature=062282ac29f081eb777219699234ed1bba683e1d65679838b6d90fa2e24f261c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPTCDGS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu2iLD3dv6ADUxGV6l3WnEyl1tLqMECjZ1B%2F2YS7oGbAiAHCwlDdC2zEhFE9YTC7BW2o98r22qRg9vLdqan14SERCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6OX4q0VzF3lyQ77UKtwDrNLQ3CW8b%2Fwti%2FIdclkvG4XhA9557uRAc5uoxBdH%2FGYYFr9cKpArJmiGF9KsbAYp8c%2BMTCaae2MMWzrnBTYBJRssUTQJhT1joiGlNye6xH7aSjtbsjA0c12m2QeN4RELN8DzJTCGTtu6juYI6tCy0F3rckrPXbjkqTFYqWkz2CAgrDtxo994tCA1bPUPU9Ob%2F3NlvSxNAvKPiYx5HtistoCVZ0cFe%2FImmpRn32NzabIEa29inRUH3x62iqByDGDv8FKy3vlo%2BVjFEtNLAsB68Yu2sZ30nYZZ06oVb%2BFuqZQLYh%2BBOTbi0IQ%2BB1Kwnqey6dI3XVFrGRM%2FUekI6zmW48bSa7DZQOcuJipO8zfts688HYFiRJJPLGbBMOB0SAYDQpcLkfWrna19lYTQqOurjGzZ%2BNF2E4d7HtkF2uVUhk7wCQ%2BbNaPQ0gxiT7QE1ApuNy%2FNKKDA3ApJBcn1pqiScc03nfZ6cHt9KffLDIMqFifVX%2Bj%2B4AGJk9Gxr1Q0XSuYnGzdGmRDMwQSeY%2FYt25myqj9eEUmotpJ3PZ7pv4HRtuWmrwDknGSUXS%2FD0XgIJYjHnx0JP3zJGFZG%2F%2F%2BIczRPXXwe%2FwPY5vAVa09nQIn%2Byg2fqRIWJXRvfis43cw8dPSyQY6pgHejsI916RG%2B5M4ARnQr9NFaZieMFrU4oIGQnr4LCqjcVqSyUDPeohgsldnJl0W4rh6rzEaYPez74Gg4bz%2FiS0sA7Mhct7DB5d5oJ1f03LvfR3Ihk6oCzUK2PezhjBa7VY%2BKs2a%2BLFTFJXPVHWUNvjTMPGcgtZyWNkyRi%2FgyNIThoHub%2BeQOHwpZm5em8UoDBG%2BTdLaungLsTxX0XFYAdVRmrJWIEg0&X-Amz-Signature=bdb5ba39a94ec5c44aab0e5493680101b537cad322aa349ca161c66e79612b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

