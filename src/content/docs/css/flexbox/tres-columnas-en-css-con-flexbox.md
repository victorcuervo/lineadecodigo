---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5OIREC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxcXNWx5Ow4NG%2BoS18fY4%2FMRg8HOVEnuEP6njZUgOGcwIgDIn7Ira2ocV7SFdnUdDZrlKogfVrQnK%2FpPITMmL9ViYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAFUUqyB7Gp0lLg2%2FCrcA4jceZgVa2QF9LuCbxFogiv6zPLEyxe7sn0onZ6q1A3LjXWsuDYhX7Izv%2FgrzJxTj%2BKh1XAJA95lpPz4fFuxWl9TVUoFRSpj5XrKiwz5M4l4oHQlMFtoGGBeXabMrSGPb53GxhoJYbPQa4dxNM3hB8WHVjQGkrc2myOfM157qsTo%2ByP4s5xFYJ9UTzWmvs64Wr4n5dvIo07PlmRPYlyyXdC%2BkbW%2F5ssc%2BUv6MM2VhiDXZBUrV6B30lyhyTpScPF7Hu1JF8OPWMn42kjC1apIDctTRfSOFZN0Azh6gwvCA2xZ5sMjZtznOsbGVz29Zlnhd67tGcfJ1nxnUecDm3v%2Fv8AQpGXAoW7qqFdikqyAIohjfgdkaciCDxt6yRsQFLw97Q6FrypA4leS8dwNnNBYrWJZEdnpwY3uoy%2BEIQaT7CIqyy5BYw7SY7i7ABQRc21S7Vtpob1PAYFVu4%2BxtPzpSMz%2B8gSBw07%2BLyYdrP94hiFzXzzeWFaAwOerra9ieGSZxLgaHzpW4jYcCME%2B9qicjqplsrQYTK8zvnqgk7mZz7Si99Eu2DC%2Fjs2eIY7lHH9KA%2F9N2%2FTJihM9mbQPWhYk5ZapblzUhwzMRezNin%2BrKGxPiuLsW0xF3U1ILhm%2BMK%2BXzckGOqUB0j6h%2FKWp3DlvyaVx8E3J9rIR3OG5R%2BgiNkl3YKyPFIfmJ7wGdyrod%2FlK2vQChWYMQ9xxc5yI5kcCL4X51fzysficQNaGYKozpUGKQ0IdwUJJyzmRuNU0SDSeQa%2Bgv3XVnnm5REm5gtiqJou5WQyaoW3EQyGY5jPEk4%2Boxlrf6pZjm3Gq7VwQG%2B45pmBueOrKdjTNvKaWXwp5adkvp4qZpZ%2Fv6Cz9&X-Amz-Signature=9b9d4c3cabd4ac789928fbeadc975fed025372fddf2d6c00a62a61274648f761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5OIREC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxcXNWx5Ow4NG%2BoS18fY4%2FMRg8HOVEnuEP6njZUgOGcwIgDIn7Ira2ocV7SFdnUdDZrlKogfVrQnK%2FpPITMmL9ViYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAFUUqyB7Gp0lLg2%2FCrcA4jceZgVa2QF9LuCbxFogiv6zPLEyxe7sn0onZ6q1A3LjXWsuDYhX7Izv%2FgrzJxTj%2BKh1XAJA95lpPz4fFuxWl9TVUoFRSpj5XrKiwz5M4l4oHQlMFtoGGBeXabMrSGPb53GxhoJYbPQa4dxNM3hB8WHVjQGkrc2myOfM157qsTo%2ByP4s5xFYJ9UTzWmvs64Wr4n5dvIo07PlmRPYlyyXdC%2BkbW%2F5ssc%2BUv6MM2VhiDXZBUrV6B30lyhyTpScPF7Hu1JF8OPWMn42kjC1apIDctTRfSOFZN0Azh6gwvCA2xZ5sMjZtznOsbGVz29Zlnhd67tGcfJ1nxnUecDm3v%2Fv8AQpGXAoW7qqFdikqyAIohjfgdkaciCDxt6yRsQFLw97Q6FrypA4leS8dwNnNBYrWJZEdnpwY3uoy%2BEIQaT7CIqyy5BYw7SY7i7ABQRc21S7Vtpob1PAYFVu4%2BxtPzpSMz%2B8gSBw07%2BLyYdrP94hiFzXzzeWFaAwOerra9ieGSZxLgaHzpW4jYcCME%2B9qicjqplsrQYTK8zvnqgk7mZz7Si99Eu2DC%2Fjs2eIY7lHH9KA%2F9N2%2FTJihM9mbQPWhYk5ZapblzUhwzMRezNin%2BrKGxPiuLsW0xF3U1ILhm%2BMK%2BXzckGOqUB0j6h%2FKWp3DlvyaVx8E3J9rIR3OG5R%2BgiNkl3YKyPFIfmJ7wGdyrod%2FlK2vQChWYMQ9xxc5yI5kcCL4X51fzysficQNaGYKozpUGKQ0IdwUJJyzmRuNU0SDSeQa%2Bgv3XVnnm5REm5gtiqJou5WQyaoW3EQyGY5jPEk4%2Boxlrf6pZjm3Gq7VwQG%2B45pmBueOrKdjTNvKaWXwp5adkvp4qZpZ%2Fv6Cz9&X-Amz-Signature=87fc7a72e272a8373d0ae8e26643576c9733184a92fc8a15f1459540e3f85866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

