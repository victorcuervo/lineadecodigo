---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQJCX7A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkqjKnpGdNqt%2B3XmpNuTb%2FpwxcE0eJFcQrjHaw92rYewIgEXJV1p2ntq4SkkUYfE1yu6VfH%2FIeJO4UhBxek0CMkYkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCeOBAzmtBvwOes3VircAwl2IplNzvt%2B1htSEbMEbPQ4tg8oIUFf1Vcc01jb1XjXyliPb0YPlw0IZj4FQeC11o5Q%2BKPCi%2BxQFQtQDtqsYO2Q29tU35Z0%2F6o%2Fm4IKzWnm%2Fl1mxqEusL7spJSkN8Uc0QTgA%2FYf81q2KLvNYR7AiWV3dEqRucEgloxjUKZlxBbbD82RF29ixTgxpva54MYdePyBUIfEUy4QWbpkQnH5y9ydiectWqsoAeDcGKynwvkvQkasYupEIRdFGgpKoaHtbN9z9VFBE%2Bm4EOLp3zg3LO67oCsMSHFHuEK6PNrbClcPBKErRZ%2BCQjeKe%2FKKE9oUnMkoH8HwTINU4SYRH1NE%2BonQ47B6lWz%2BRzNLTpDkoG5DeJjqCeuOGKexerHaDgs0prhFjUxD%2FPuy58uGKnVJAT2hLHyfJGPgDkBeh9%2BlSrpIfHtF4awHcKtn6DU8Hnt9asM%2FI%2FeTK8JrHeDrfuu%2Fp8nmK7t7eQC6HBsJdYDS8M7B89F79Een%2B2XXHZB5v2RqUcL7UfMSB4w%2BUczFpVjpDoLWMiojruQ%2BYCrB21ahOr9wOOk9skbjfWyIBPzJE%2Bk0iXlUcuuoOYh6Fufc6u3wx%2BncIaPZ7JUMcl8WvOpFOBXI1%2By1YjDSUzAnyXHpML%2FH0ckGOqUB%2Bz5Ly7lKajRpSuhaH3U6g2OT3QgfbecfnGQmraES10WqQqzOiInQ4dLACYFLanXnCfO%2F1LggF90hlvzj7LOk4k69MtmacqVQRHUtGJzHYsQLd2f%2F2jjDl24h2c2PoI6WJU0ICQqzW48EdrsMtuW5EZ0arpPulPXUpW2GErRdyzjTnMSrZiYa0BRQx4qJOEIBTuQsJacDi0sl%2FDVbc6dPb2GOu%2BgQ&X-Amz-Signature=8095d354db92ce4f1b52d87bde4471605294e68361f00cadf5dae1815601bc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQJCX7A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkqjKnpGdNqt%2B3XmpNuTb%2FpwxcE0eJFcQrjHaw92rYewIgEXJV1p2ntq4SkkUYfE1yu6VfH%2FIeJO4UhBxek0CMkYkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCeOBAzmtBvwOes3VircAwl2IplNzvt%2B1htSEbMEbPQ4tg8oIUFf1Vcc01jb1XjXyliPb0YPlw0IZj4FQeC11o5Q%2BKPCi%2BxQFQtQDtqsYO2Q29tU35Z0%2F6o%2Fm4IKzWnm%2Fl1mxqEusL7spJSkN8Uc0QTgA%2FYf81q2KLvNYR7AiWV3dEqRucEgloxjUKZlxBbbD82RF29ixTgxpva54MYdePyBUIfEUy4QWbpkQnH5y9ydiectWqsoAeDcGKynwvkvQkasYupEIRdFGgpKoaHtbN9z9VFBE%2Bm4EOLp3zg3LO67oCsMSHFHuEK6PNrbClcPBKErRZ%2BCQjeKe%2FKKE9oUnMkoH8HwTINU4SYRH1NE%2BonQ47B6lWz%2BRzNLTpDkoG5DeJjqCeuOGKexerHaDgs0prhFjUxD%2FPuy58uGKnVJAT2hLHyfJGPgDkBeh9%2BlSrpIfHtF4awHcKtn6DU8Hnt9asM%2FI%2FeTK8JrHeDrfuu%2Fp8nmK7t7eQC6HBsJdYDS8M7B89F79Een%2B2XXHZB5v2RqUcL7UfMSB4w%2BUczFpVjpDoLWMiojruQ%2BYCrB21ahOr9wOOk9skbjfWyIBPzJE%2Bk0iXlUcuuoOYh6Fufc6u3wx%2BncIaPZ7JUMcl8WvOpFOBXI1%2By1YjDSUzAnyXHpML%2FH0ckGOqUB%2Bz5Ly7lKajRpSuhaH3U6g2OT3QgfbecfnGQmraES10WqQqzOiInQ4dLACYFLanXnCfO%2F1LggF90hlvzj7LOk4k69MtmacqVQRHUtGJzHYsQLd2f%2F2jjDl24h2c2PoI6WJU0ICQqzW48EdrsMtuW5EZ0arpPulPXUpW2GErRdyzjTnMSrZiYa0BRQx4qJOEIBTuQsJacDi0sl%2FDVbc6dPb2GOu%2BgQ&X-Amz-Signature=b89e44a40191a8539ccd2c0a7b23cd03d2b5dad5d5fa30956e97bff157482b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

