---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4SFXJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS8Xzm0%2BhQObyI1xJ54qTYbB4PNfgfO9clXZ8j7pz05AiEAmJXOlVTLqjx6st1BvDbUHGHnNQ91ciLx5dcMLdvDBakq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN8HQntxc9aiTiMBgSrcAxiGhtUScm9E6vTeB8h9dzyPQ1guFQcTz4%2BixNDDdI6eywgKuubaQaFfXafre8ZBqlMGKuAYa8MwTGfxyp5QqH9bLZtxdJb3cLBbVrAtmtiTjAgfKnl%2B%2F8JOVYDLNZNZG5vaAgLIaCVhJUj7L2S%2FDBXxB7fXfSy39xXCbSPhD8c9cC%2FHQI%2F0gdCsL5rFkdB4VXecgl2kAWVvc6bzj51BA%2BnIYamntJgpAt0bopycoKbppWT3JgPCVGMIsICWLTEuE61ryJx%2F0g51WGpEhTksK3drEQmPbPG3ZvBAkNgiCEAv2BZUT0JSasLLT2%2BxGjjdXIeBjuTOMEhpI20ZWXOEfsEmOcelEE6JMLCfMY5N0Hc5WZYSBN1DrXGGrxA4hbtCbTq8L70snL6stDPe7i0%2B99sCqBFwz2kXL48mDXYmgIDFAJRa00hliZYEhotV28LtkSsmAx1UTsy9BVWyLwDezwsoxTmKCJhj%2F1yWjOdromT%2B%2BQ5XCL1QBPXQK2bY7fwB0uNzd91eoI8R09oOBDy68%2FTwKTuzxme6wQULo6E4wUvMcCAHdDuFtg93nVBD90Tdsb0UHsSbc9Z0Vs%2FCOs%2BVnEQnV3bsHPn44MylQX4K5lKtaRYK2CoqDxEy9rk0MIn9zskGOqUBY0EX0w87BNgbQLRvMOKLQMebcYe1rAbDiHvhhOR7V%2FHZy%2FgQkNVcSOWWInAmBlugxJafvvvsiOcR6pKPy0u6Jju5ecfjLSDZRzIppRqR%2B9SmakNkyTvORW6mQ%2B7faqf04jCgRSOcr%2Bt9oh6m47Etrn%2FOwC%2BxUVa16JZ0WACCKt27kLmr2SvtrukoAY1WQUg%2Bua2CzB3fIeXjrMDQBfADatnZY4CK&X-Amz-Signature=94f618b81beb3640895c42d937e69b0e8926b475d81b5cca86952aada0e794df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4SFXJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS8Xzm0%2BhQObyI1xJ54qTYbB4PNfgfO9clXZ8j7pz05AiEAmJXOlVTLqjx6st1BvDbUHGHnNQ91ciLx5dcMLdvDBakq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN8HQntxc9aiTiMBgSrcAxiGhtUScm9E6vTeB8h9dzyPQ1guFQcTz4%2BixNDDdI6eywgKuubaQaFfXafre8ZBqlMGKuAYa8MwTGfxyp5QqH9bLZtxdJb3cLBbVrAtmtiTjAgfKnl%2B%2F8JOVYDLNZNZG5vaAgLIaCVhJUj7L2S%2FDBXxB7fXfSy39xXCbSPhD8c9cC%2FHQI%2F0gdCsL5rFkdB4VXecgl2kAWVvc6bzj51BA%2BnIYamntJgpAt0bopycoKbppWT3JgPCVGMIsICWLTEuE61ryJx%2F0g51WGpEhTksK3drEQmPbPG3ZvBAkNgiCEAv2BZUT0JSasLLT2%2BxGjjdXIeBjuTOMEhpI20ZWXOEfsEmOcelEE6JMLCfMY5N0Hc5WZYSBN1DrXGGrxA4hbtCbTq8L70snL6stDPe7i0%2B99sCqBFwz2kXL48mDXYmgIDFAJRa00hliZYEhotV28LtkSsmAx1UTsy9BVWyLwDezwsoxTmKCJhj%2F1yWjOdromT%2B%2BQ5XCL1QBPXQK2bY7fwB0uNzd91eoI8R09oOBDy68%2FTwKTuzxme6wQULo6E4wUvMcCAHdDuFtg93nVBD90Tdsb0UHsSbc9Z0Vs%2FCOs%2BVnEQnV3bsHPn44MylQX4K5lKtaRYK2CoqDxEy9rk0MIn9zskGOqUBY0EX0w87BNgbQLRvMOKLQMebcYe1rAbDiHvhhOR7V%2FHZy%2FgQkNVcSOWWInAmBlugxJafvvvsiOcR6pKPy0u6Jju5ecfjLSDZRzIppRqR%2B9SmakNkyTvORW6mQ%2B7faqf04jCgRSOcr%2Bt9oh6m47Etrn%2FOwC%2BxUVa16JZ0WACCKt27kLmr2SvtrukoAY1WQUg%2Bua2CzB3fIeXjrMDQBfADatnZY4CK&X-Amz-Signature=369690b2f1613ecf8ac31a58de155fd93021eefdde9582deb87cbe40eba212e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

