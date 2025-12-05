---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW3UNWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD1jl8IFpDn5QTsOhfnr0CwRG2fAIGInjiog62%2BiBXuAIhAPBnaXmbOdXwcigR2IK%2Bj2PUpRX16BGiyuYlxNCdFFtHKv8DCGYQABoMNjM3NDIzMTgzODA1IgwEfDkUSTe7keGxI44q3ANbnHln1WpKj7Ja4879gOv0OkyAQLjHzL%2BZYXVGVprEtesWlVOSfZU19AFuSNOpIZniT5BxHJcz%2FNZLq5hOitXeFYscPvLG04sO%2BGm79br5y%2BXJkoiScrMZxX1doyq3GG%2FNA7mHHTjsXuua0wknNLwj0FamlIQOXVS%2By%2FxvhacCBkG7rRJSWJmaQps6JYcOVJOHoGqoz5T3Iaa8GUeIU40GRwqd6FPNt1LzAGs6Nm11H9D2Ee7nr2wipC7ElUQKj%2Fis7Zaf2w37D3HKObXeQyjuTtKSXcWOWa0QHR5TnbWXtcZ2sZayRuX5SnhqlKxff9kh2tNDLf9PIZX9ja9gMAr218pehqL73s91ZH8nf2hyPfEnaiFkekePOcu5cxhwH9RgdntTF9LMt0Q8Y1%2FGcnQPPbxsc5oxJBO11k14XJBeTbW177rE2ugmoptVm6cuOo8uriln9u1LScQpft2ZygYJjCMxNj3HB9s8kdFUZPssAmzkubHjx08xWj9v7RrE06zTePi6F%2BW%2FJYo1zb%2BFKE%2FKpJB1qpVarw3QAUUQqVomvlYD%2Fg6bSnF2eku9nvuGbXA7IzKAiCQp%2BHbc2ik%2FMBmcyF41rw4kigJiamGfNeojba4MbRjuIPjxP%2FhUjzDAjM3JBjqkAT8a7PY7OHP73Ea5DYusCnGVXXqanaiU2w%2FLhy3Gv2EmXS0nccl0dkP440DMPtnZe4bJcx2govbJDC2MgxyqlQYNuz47fkG28%2BHrXy9kV9GVG3eLzjAbfa%2F%2FytP5Rv2spNI5VblcUDMMycMX9DtlQ%2BvrJG9c1f5F1ZpHlgwbbHUXShlbBXlfPgLspOsvRjJ%2BXm9FGuNLChT6WHF%2FkApra%2FCklZ78&X-Amz-Signature=8a048358e0886a6fe2c1401796d9a6bd7ce1595671d2cba9625beb17f4e21222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW3UNWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD1jl8IFpDn5QTsOhfnr0CwRG2fAIGInjiog62%2BiBXuAIhAPBnaXmbOdXwcigR2IK%2Bj2PUpRX16BGiyuYlxNCdFFtHKv8DCGYQABoMNjM3NDIzMTgzODA1IgwEfDkUSTe7keGxI44q3ANbnHln1WpKj7Ja4879gOv0OkyAQLjHzL%2BZYXVGVprEtesWlVOSfZU19AFuSNOpIZniT5BxHJcz%2FNZLq5hOitXeFYscPvLG04sO%2BGm79br5y%2BXJkoiScrMZxX1doyq3GG%2FNA7mHHTjsXuua0wknNLwj0FamlIQOXVS%2By%2FxvhacCBkG7rRJSWJmaQps6JYcOVJOHoGqoz5T3Iaa8GUeIU40GRwqd6FPNt1LzAGs6Nm11H9D2Ee7nr2wipC7ElUQKj%2Fis7Zaf2w37D3HKObXeQyjuTtKSXcWOWa0QHR5TnbWXtcZ2sZayRuX5SnhqlKxff9kh2tNDLf9PIZX9ja9gMAr218pehqL73s91ZH8nf2hyPfEnaiFkekePOcu5cxhwH9RgdntTF9LMt0Q8Y1%2FGcnQPPbxsc5oxJBO11k14XJBeTbW177rE2ugmoptVm6cuOo8uriln9u1LScQpft2ZygYJjCMxNj3HB9s8kdFUZPssAmzkubHjx08xWj9v7RrE06zTePi6F%2BW%2FJYo1zb%2BFKE%2FKpJB1qpVarw3QAUUQqVomvlYD%2Fg6bSnF2eku9nvuGbXA7IzKAiCQp%2BHbc2ik%2FMBmcyF41rw4kigJiamGfNeojba4MbRjuIPjxP%2FhUjzDAjM3JBjqkAT8a7PY7OHP73Ea5DYusCnGVXXqanaiU2w%2FLhy3Gv2EmXS0nccl0dkP440DMPtnZe4bJcx2govbJDC2MgxyqlQYNuz47fkG28%2BHrXy9kV9GVG3eLzjAbfa%2F%2FytP5Rv2spNI5VblcUDMMycMX9DtlQ%2BvrJG9c1f5F1ZpHlgwbbHUXShlbBXlfPgLspOsvRjJ%2BXm9FGuNLChT6WHF%2FkApra%2FCklZ78&X-Amz-Signature=b3612d52af147997222ae57354d21a3f67a1c887d5f9fc8ab5e4f529c6136790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

