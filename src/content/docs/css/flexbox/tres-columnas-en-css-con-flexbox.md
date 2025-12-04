---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35ERRT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDpvXowBhkYBe%2Fmn6Dxe8GmNBO55cD8zQqaacjVReZyiAiEA3P%2B1jiQ30GgalHZz27Hmpd0LdW9PIY0wSBUkbNactCkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAYN3BKHgBFTtmTPWCrcA2QNGcLXEFcatZQMrpforbYbdCNyIpkoVUWv1pktGOFH1YDwvOIGgku%2B89JN57mk7SWEAl8WqPehTZIXF%2BY6DNfgHYch6SVW6fT1qhW7T%2BRwh0EZalKL2ZomBdPg%2BaISiOQ1Wo%2FU%2BPC7F8mGnz543JGwno%2BU%2F6Tf62MlVqsSsZGqiK5QtraQEl6QEmtJoQ8Q3AMq79Nc31JXXwg%2FMoWKkKIZRUdxr%2FYYNNgDKaga95q6YdZ0HgcCs4jPzHxv0su%2F8mnkKGuBqpnG%2BAN51QqKsZ%2FZ0kGMi9Ld7D%2FJOHa1bcA6J%2B4z4r5Tbpvq5fR01Pf2Cq22VKnSOx10OXBP4IEIvt9BxhPDCt9ttCoQD1%2BBzbxHvMUYhdSG2KYsQwFEXOtNQc8HUSKYBOY0nl4aJAsokx6RJrmXlSGssO5KRsgZNnfmanwaftf60Ft6eYDQuGc1nr5%2BKg67jqynhG12WoPhLt0ncPzOn6hgHiCqOyGTW7L%2BB%2BhFnYd52krAo45%2Bvxj6g5y6KaO4V00pNGULyaBQgogWeswyYGpkcisP%2FkZSpskzx8vytKMSX9T2mI9KerOuR8%2B1h130uamkKaawFUFRdhspkhUSLGFtb36NpVNgjU80cXZyFH%2F%2FQGR1VcEzML%2BtxMkGOqUBeEMhDx%2Bf65qQUmHcjdl12B3qiEQyN1uF%2FbUJevCxvhjzjJ0m1Gt%2F3p7CqHtEbEEa4xqORfArui0Rvt2ta9CsScx3UmmwZbIWOhi9j%2BaDsyrpnbZAQEnAF1ksQOPSKKvK8zLhvLMctXMRoudtHpZOXjJZ%2FzbB84u%2BgwDO0Wj%2Br9dMtbpDbwFzQE1Lr1VDXjqvmmmHeT5AHSV%2FDFcwkB5x%2Bgoye%2FdO&X-Amz-Signature=324a89166351b64178519d41a0d54aa136a35d6f3934b208247a51f94f07e84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35ERRT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDpvXowBhkYBe%2Fmn6Dxe8GmNBO55cD8zQqaacjVReZyiAiEA3P%2B1jiQ30GgalHZz27Hmpd0LdW9PIY0wSBUkbNactCkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAYN3BKHgBFTtmTPWCrcA2QNGcLXEFcatZQMrpforbYbdCNyIpkoVUWv1pktGOFH1YDwvOIGgku%2B89JN57mk7SWEAl8WqPehTZIXF%2BY6DNfgHYch6SVW6fT1qhW7T%2BRwh0EZalKL2ZomBdPg%2BaISiOQ1Wo%2FU%2BPC7F8mGnz543JGwno%2BU%2F6Tf62MlVqsSsZGqiK5QtraQEl6QEmtJoQ8Q3AMq79Nc31JXXwg%2FMoWKkKIZRUdxr%2FYYNNgDKaga95q6YdZ0HgcCs4jPzHxv0su%2F8mnkKGuBqpnG%2BAN51QqKsZ%2FZ0kGMi9Ld7D%2FJOHa1bcA6J%2B4z4r5Tbpvq5fR01Pf2Cq22VKnSOx10OXBP4IEIvt9BxhPDCt9ttCoQD1%2BBzbxHvMUYhdSG2KYsQwFEXOtNQc8HUSKYBOY0nl4aJAsokx6RJrmXlSGssO5KRsgZNnfmanwaftf60Ft6eYDQuGc1nr5%2BKg67jqynhG12WoPhLt0ncPzOn6hgHiCqOyGTW7L%2BB%2BhFnYd52krAo45%2Bvxj6g5y6KaO4V00pNGULyaBQgogWeswyYGpkcisP%2FkZSpskzx8vytKMSX9T2mI9KerOuR8%2B1h130uamkKaawFUFRdhspkhUSLGFtb36NpVNgjU80cXZyFH%2F%2FQGR1VcEzML%2BtxMkGOqUBeEMhDx%2Bf65qQUmHcjdl12B3qiEQyN1uF%2FbUJevCxvhjzjJ0m1Gt%2F3p7CqHtEbEEa4xqORfArui0Rvt2ta9CsScx3UmmwZbIWOhi9j%2BaDsyrpnbZAQEnAF1ksQOPSKKvK8zLhvLMctXMRoudtHpZOXjJZ%2FzbB84u%2BgwDO0Wj%2Br9dMtbpDbwFzQE1Lr1VDXjqvmmmHeT5AHSV%2FDFcwkB5x%2Bgoye%2FdO&X-Amz-Signature=800f3f68e33528fbc5edaf7ae7fbf5eaa4947f6b56cd742ecbd9aab8868f5eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

