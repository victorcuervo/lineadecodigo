---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPMT6VB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEUJ6HGE1F2YPhhoZ2J1HI%2FhiY9kUXUEYh8697TnOTGvAiEAjXYx7CHPQiwLbjrLgY07ZB1FT9LO%2BwL96gXmsF%2FmhRcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDO2a1DlSlezmakrocSrcAw4Tm3WJwCW2cSkP%2Br3J4ThOBAq2DSKX7Lft%2FgCpDn5iCblLdRHUZCoL1jlJOjrv8TiIXVH0Ent1sjbvzhw%2FHEq8bFYKwxYekve3qkZMDlGkN6KbwwpQ5WQJm%2FKZFXMNaqCojwRipLkK3xOdSzyTmZuKhk7Wn5kMceDClI5qc57ZCEMjWCrZPprrlckzRG0vjqbMrqy2Vecvvl0lAJRJeD1%2FUbnohyUG4ZCi9p2T3cbocJy%2BenS9NoCGf8g8DSCDMesrnjP8wFE5JzYEqGieEEnFBgTPPYqzmfjrA%2BsT8FLSxv0KjXCzGlhXysZnzy5eWihxR%2FmFrZxc4cYrJIzP%2FBP6BZztQSgi5QNfVb1z7th%2FjGAWrJV1hdzP4h0L0XJQbiGBs0GIwtMxxP1LeUJRGEbxc0Saeio5f%2BmsSpBFdkPy%2Fnzx1EdTSmr%2Blac7vFwqYwvfrYAW5%2Feu7cC2OigVlMHKgVfzviPJW5Zvejfs3fyxoYfHGJWZM5WTguBOmQ1ueGr4cqCLENB2MshXbfnW0oZS9fFkDiFT8SHLxtODYGb82NMVElT%2BGHv5y2NQ4Tgg71QZ8CN3CSJx6TBWSjW4rs0JXwGWTqzrXsvwNsBiCNk%2F%2F1ISAyfZLOsdZ0ulMMKtxMkGOqUB5aZ6BijNM7ZPWc4Ad7McrOjviFjSyTo%2BrMLzckwVVPcSm89GNfNN9lxR8X0DPd1xHYU5EpK%2BvXa6D4kHXH1kr2SNBg01UV9n0yMpRD%2FDrAPjO%2Bfg6irxoGI1yYu1bhZ19TF5AW%2BgBv6McUzDFkKNTmOM42jeqd5NeCzVMqaOBgWEm75ZxtNuLwybssn3qznvKKvO8eUrl8st7KoKtqSHNvEk65Cb&X-Amz-Signature=9de4a490ca16fbb59d09f0805734dc2aa80187bb0bd5487f92f4dad9f16f1739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPMT6VB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEUJ6HGE1F2YPhhoZ2J1HI%2FhiY9kUXUEYh8697TnOTGvAiEAjXYx7CHPQiwLbjrLgY07ZB1FT9LO%2BwL96gXmsF%2FmhRcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDO2a1DlSlezmakrocSrcAw4Tm3WJwCW2cSkP%2Br3J4ThOBAq2DSKX7Lft%2FgCpDn5iCblLdRHUZCoL1jlJOjrv8TiIXVH0Ent1sjbvzhw%2FHEq8bFYKwxYekve3qkZMDlGkN6KbwwpQ5WQJm%2FKZFXMNaqCojwRipLkK3xOdSzyTmZuKhk7Wn5kMceDClI5qc57ZCEMjWCrZPprrlckzRG0vjqbMrqy2Vecvvl0lAJRJeD1%2FUbnohyUG4ZCi9p2T3cbocJy%2BenS9NoCGf8g8DSCDMesrnjP8wFE5JzYEqGieEEnFBgTPPYqzmfjrA%2BsT8FLSxv0KjXCzGlhXysZnzy5eWihxR%2FmFrZxc4cYrJIzP%2FBP6BZztQSgi5QNfVb1z7th%2FjGAWrJV1hdzP4h0L0XJQbiGBs0GIwtMxxP1LeUJRGEbxc0Saeio5f%2BmsSpBFdkPy%2Fnzx1EdTSmr%2Blac7vFwqYwvfrYAW5%2Feu7cC2OigVlMHKgVfzviPJW5Zvejfs3fyxoYfHGJWZM5WTguBOmQ1ueGr4cqCLENB2MshXbfnW0oZS9fFkDiFT8SHLxtODYGb82NMVElT%2BGHv5y2NQ4Tgg71QZ8CN3CSJx6TBWSjW4rs0JXwGWTqzrXsvwNsBiCNk%2F%2F1ISAyfZLOsdZ0ulMMKtxMkGOqUB5aZ6BijNM7ZPWc4Ad7McrOjviFjSyTo%2BrMLzckwVVPcSm89GNfNN9lxR8X0DPd1xHYU5EpK%2BvXa6D4kHXH1kr2SNBg01UV9n0yMpRD%2FDrAPjO%2Bfg6irxoGI1yYu1bhZ19TF5AW%2BgBv6McUzDFkKNTmOM42jeqd5NeCzVMqaOBgWEm75ZxtNuLwybssn3qznvKKvO8eUrl8st7KoKtqSHNvEk65Cb&X-Amz-Signature=5ae86f0092563002f26078a5251e3519ce715e95477818bde301e093fb878d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

