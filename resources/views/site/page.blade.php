@extends('layouts.site')

@section('content')

<!--================Breadcrumb Area =================-->
<section class="breadcrumb_area">
    <div class="container">
        <div class="breadcrumb_text">
            <h3 class="wow fadeInUp" data-wow-delay="0.2s">{{ $pagina['pub_titulo'] }}</h3>
        </div>
    </div>
</section>
<!--================End Breadcrumb Area =================-->

<!--================Blog Area =================-->
<section class="isolation_area isolation_margin_bottom">
    <div class="container">
        @php
        $itens = json_decode($pagina['pub_conteudo']);
        @endphp

        @if ($itens)
        <div class="accordion" id="accordion">
            @foreach ($itens as $index => $item)
            <div class="card">
                {{-- TITULO --}}

                <div class="card-header" id="title-{{ $index }}">
                    <h4 class="mb-0">
                        <a class="text_btn" role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapse{{ $index }}"
                            aria-expanded="false" aria-controls="collapse{{ $index }}">
                            {{ $item->titulo }}
                            <i class="fas fa-angle-down rotate-icon"></i>
                        </a>
                    </h4>
                </div>

                {{-- COLAPSE --}}
                <div id="collapse{{ $index }}" class="collapse" role="tabpanel" aria-labelledby="title-{{ $index }}" data-parent="accordion">

                    

                    {{-- CONTEUDO E ANEXOS --}}
                    @if (strip_tags($item->conteudo) || !empty($item->anexos))
                        <div class="card-body">

                            <div class="entry-content pagina ml-2 mt-1">
                                {!! html_entity_decode($item->conteudo) !!}
                            </div>

                            @if(!empty($item->anexos))
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Anexos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($item->anexos as $anexo)
                                    <tr>
                                        <td>
                                            <i class="fa fa-file-pdf-o"></i>
                                            <a
                                                href="/pagina/exibir/anexo/ {{ $anexo->pub_anexo_id }}">{{ $anexo->pub_anexo_nome }}</a>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            @endif   
                        </div> 
                    @endif
                    
                        
                    
                    {{-- SUBITEM --}}
                    @if (isset($item->subitens) && !empty($item->subitens))    
                    @foreach ($item->subitens as $subindex => $subitem)    
                    <div class="panel panel-default">
                        
                        <!-- TITULO -->
                        <div class="panel-heading" role="tab" id="title-{{$index}}-{{$subindex}}">
                            <h4 style="margin-left: 1.0em;" class="mb-0">
                                <a class="text_btn" role="button" data-toggle="collapse" href="#tipo-{{$index}}-{{$subindex}}" aria-expanded="false" aria-controls="tipo-{{$index}}-{{$subindex}}">
                                    {{ $subitem->titulo }}<i class="fas fa-angle-down rotate-icon"></i>
                                </a>
                            </h4>
                        </div>

                        {{-- COLAPSE --}}
                        <div id="tipo-{{$index}}-{{$subindex}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-{{$index}}-{{$subindex}}">
                            
                            {{-- CONTEUDO E ANEXOS --}}
                            @if (strip_tags($subitem->conteudo) || !empty($subitem->anexos))
                            <div class="pad">
                                <div class="bg-white pad">
                                    <div class="entry-content pagina ml-2 mt-1">
                                        {!! html_entity_decode($subitem->conteudo) !!}
                                    </div>
                        
                                    <div class="entry-content">
                                        @if(!empty($subitem->anexos))
                                        <table style="margin-left: 2.0em;" class="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th> Anexos</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($subitem->anexos as $anexo)
                                                <tr>
                                                    <td>
                                                        <i class="fa fa-file-pdf-o"></i>
                                                        <a
                                                            href="/pagina/exibir/anexo/ {{ $anexo->pub_anexo_id }}">{{ $anexo->pub_anexo_nome }}</a>
                                                    </td>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            @endif

                            <!-- SUBSUBITEM -->
                            @if (isset($subitem->subitens) && !empty($subitem->subitens))    
                            @foreach ($subitem->subitens as $subsubindex => $subsubitem)
                            <div class="panel panel-default panel-processo">
                                
                                <!-- TITULO E ACTIONS -->
                                <div class="panel-heading" role="tab" id="title-processo-{{$index}}-{{$subindex}}-{{$subsubindex}}">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" href="#processo-{{$index}}-{{$subindex}}-{{$subsubindex}}" aria-expanded="false" aria-controls="processo-{{$index}}-{{$subindex}}-{{$subsubindex}}">
                                            {{$subsubitem->titulo}}
                                        </a>
                                    </h4>
                                </div>

                                <!-- COLAPSE -->
                                <div id="processo-{{$index}}-{{$subindex}}-{{$subsubindex}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-processo-{{$index}}-{{$subindex}}-{{$subsubindex}}">
                                    
                                    {{-- CONTEUDO E ANEXOS --}}
                                    @if (strip_tags($subsubitem->conteudo) || !empty($subsubitem->anexos))
                                    <div class="pad">
                                        <div class="bg-white pad">
                                            <div class="entry-content pagina ml-2 mt-1">
                                                {!! html_entity_decode($subsubitem->conteudo) !!}
                                            </div>
                                
                                            <div class="entry-content">
                                                @if(!empty($subsubitem->anexos))
                                                <table class="table table-striped table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th> Anexos</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($subsubitem->anexos as $anexo)
                                                        <tr>
                                                            <td>
                                                                <i class="fa fa-file-pdf-o"></i>
                                                                <a
                                                                    href="/pagina/exibir/anexo/ {{ $anexo->pub_anexo_id }}">{{ $anexo->pub_anexo_nome }}</a>
                                                            </td>
                                                        </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    @endif

                                    <!-- SUBSUBSUBITEM -->
                                    @if (isset($subsubitem->subitens) && !empty($subsubitem->subitens))    
                                    @foreach ($subsubitem->subitens as $subsubsubindex => $subsubsubitem)
                                    <div class="panel panel-default">

                                        <!-- TITULO E ACTIONS -->
                                        <div class="panel-heading" role="tab" id="title-processo-{{$index}}-{{$subindex}}-{{$subsubindex}}-{{$subsubsubindex}}">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" href="#processo-{{$index}}-{{$subindex}}-{{$subsubindex}}-{{$subsubsubindex}}" aria-expanded="false" aria-controls="processo-{{$index}}-{{$subindex}}-{{$subsubindex}}-{{$subsubsubindex}}">
                                                    {{$subsubsubitem->titulo}}
                                                </a>
                                            </h4>
                                        </div>

                                        {{-- COLAPSE --}}
                                        <div id="processo-{{$index}}-{{$subindex}}-{{$subsubindex}}-{{$subsubsubindex}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-processo-{{$index}}-{{$subindex}}-{{$subsubindex}}-{{$subsubsubindex}}">
                                            
                                            {{-- CONTEUDO E ANEXOS --}}
                                            @if (strip_tags($subsubsubitem->conteudo) || !empty($subsubsubitem->anexos))
                                            <div class="pad">
                                                <div class="bg-white pad">
                                                    <div class="entry-content pagina ml-2 mt-1">
                                                        {!! html_entity_decode($subsubsubitem->conteudo) !!}
                                                    </div>
                                        
                                                    <div class="entry-content">
                                                        @if(!empty($subsubsubitem->anexos))
                                                        <table class="table table-striped table-bordered table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th> Anexos</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                @foreach ($subsubsubitem->anexos as $anexo)
                                                                <tr>
                                                                    <td>
                                                                        <i class="fa fa-file-pdf-o"></i>
                                                                        <a
                                                                            href="/pagina/exibir/anexo/ {{ $anexo->pub_anexo_id }}">{{ $anexo->pub_anexo_nome }}</a>
                                                                    </td>
                                                                </tr>
                                                                @endforeach
                                                            </tbody>
                                                        </table>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            @endif
                                            
                                        </div>

                                    </div>
                                    @endforeach
                                    @endif
                                </div>
                            </div>
                            @endforeach
                            @endif
                        </div>
                    </div>
                    @endforeach
                    @endif
                </div>
            </div>
            @endforeach
        </div>
        @else
        <h4 class="entry-content pagina">
            {!! html_entity_decode($pagina['pub_conteudo']) !!}
        </h4>

        <div class="card">
            @if(!empty($anexos))
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th> Anexos</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($anexos as $anexo)
                    <tr>
                        <td>
                            <i class="fa fa-file-pdf-o"></i>
                            <a href="/pagina/exibir/anexo/ {{ $anexo['pub_anexo_id'] }}">{{ $anexo['pub_anexo_nome'] }}</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @endif
        </div>
        @endif
    </div>
</section>


@endsection